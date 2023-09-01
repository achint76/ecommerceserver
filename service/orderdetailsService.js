const models = require('../models/index');

module.exports = {
    createOrderDetails: async function({id, order_id, product_id, quantity, price}){
        return await models.OrderDetails.create({
            //id: id,
            order_id: order_id,
            product_id: product_id,
            quantity: quantity,
            price: price            
        });
    },
    getOrderDetails: async function(){
        return await models.OrderDetails.findAll();
    },
    // 
    deleteOrderDetails: async function({id}){
        console.log(id);
        return await models.OrderDetails.destroy({
            where: {
                id: id
            }
        });
    },

}