const { Op } = require('sequelize');
const models = require('../models/index');

module.exports = {
    createCart: async function({product_id, user_id, quantity}){
        return await models.Cart.create({
            //id: id,
            product_id: product_id,
            user_id: user_id,
            quantity: quantity
            
        });
    },
    getCart: async function(){
        return await models.Cart.findAll();
    },
    
    deleteCart: async function({id}){
        console.log(id);
        return await models.Cart.destroy({
            where: {
                id: id
            }
        });
    },

    removeCart: async function ({ product_id, user_id }) {
        const findquantity = await models.Cart.findAll({
          attributes: ['quantity'],
          where: {
            [Op.and]: [
              { user_id: user_id },
              { product_id: product_id }
            ]
          },
          raw: true
        });
        
        console.log(findquantity); 
        const quantity = findquantity[0].quantity;
        if(quantity == 1){
            await models.Cart.destroy({
                where: {
                    product_id: product_id
                }
            })
        }

        else if(quantity > 1){
            await models.Cart.update({
                quantity: models.sequelize.literal(`quantity - ${1}`)
            },{
                where: {
                    [Op.and]:
                        [{ user_id: user_id },
                        { product_id: product_id }]
                }
            })
            
        }
        return findquantity; // Return the result
      },

      addonemore: async function ({ product_id, id }) {
        console.log(id);
        const result = await models.Cart.findAll({
            where: {
                [Op.and]: [
                    { user_id: id },
                    { product_id: product_id }
                ]
            },
            raw: true
        });
        // Extract the count from the result object
      
    // console.log(id, product_id);
    console.log(result);
    return (result);
},

findprice: async function ({
    product_id, quantity
}) {
    const data = await models.Product.findAll({
        where: {
            id: product_id
        }
    });
    const productdata = data.map(obj => obj.toJSON());
    // console.log(productdata);

    const price = quantity * productdata[0].price
    console.log(price);
    return price;
}
}