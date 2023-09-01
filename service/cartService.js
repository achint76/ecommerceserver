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

}