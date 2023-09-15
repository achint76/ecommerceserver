const models = require('../models/index');
const { Op, where } = require("sequelize");
module.exports = {
    addtoinventory: async function({product_id, price, quantity}){
        console.log("**************");
        const item = await models.Inventory.create({
            product_id: product_id,
            price: price,
            quantity: quantity
        });
        console.log("item is:---",item);
        return item;
        
    },
    
    updateInventory : async function({product_id, price, quantity}){
        await models.Inventory.update({
            price: models.sequelize.literal(`price + ${price}`),
            quantity: models.sequelize.literal(`quantity+${quantity}`)
        }, {
            where: {
                product_id:product_id
            }
        })

        return models.Inventory.findOne({
            where:{
                product_id: product_id
            },
            raw: true
        })
    },

    decreasequantity: async function({ cartdata}){
        //console.log("--------><-------");
        //console.log(cartdata, "--cartdata--");
        const inventory = await Promise.all(
            cartdata.map(async (obj) => {
                const [numupdatedrows, updatedrows] = await models.Inventory.update({
                    quantity: models.sequelize.literal(`quantity - ${obj.quantity}`)
                   // price: models.sequelize.literal(`price`)
                },
                {
                    where: {
                        [Op.and]: [
                            { product_id: obj.product_id },
                            models.sequelize.literal(`quantity>=${obj.quantity}`),
                        ],
                    },
                });
                return numupdatedrows;
            })
        );
        return inventory;
    },
   

}