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

    insertOrder: async function ({ cartdata }) {
        // console.log(cartdata);
    
        const addOrders = await Promise.all(
          cartdata.map(async obj => {
            await models.Order.bulkCreate([
              {
                user_id: obj.user_id,
                product_id:obj.product_id,
                total: "600",
    
              },
            ]);
          })
        );
    
        const orders = await models.Order.findAll()
        return orders;
      

    }

}