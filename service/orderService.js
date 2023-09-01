const models = require('../models/index');

module.exports = {
    createOrder: async function({id, user_id, order_id, total}){
        return await models.Order.create({
            //id: id,
            user_id: user_id,
            order_id: order_id,
            total: total            
        });
    },
    getOrder: async function(){
        return await models.Order.findAll();
    },
    // 
    deleteOrder: async function({id}){
        console.log(id);
        return await models.Order.destroy({
            where: {
                id: id
            }
        });
    },

}