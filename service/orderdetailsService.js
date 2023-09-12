const models = require('../models/index');

module.exports = {
    createOrderDetails: async function ({ id, order_id, product_id, quantity, price }) {
        return await models.OrderDetails.create({
            //id: id,
            order_id: order_id,
            product_id: product_id,
            quantity: quantity,
            price: price
        });
    },
    getOrderDetails: async function () {
        return await models.OrderDetails.findAll();
    },
    // 
    deleteOrderDetails: async function ({ id }) {
        console.log(id);
        return await models.OrderDetails.destroy({
            where: {
                id: id
            }
        });
    },
    // addingOrderDetails: async function({user_id, cartdata}){
    addingOrderDetails: async function (user_id, cartdata) {
        console.log(cartdata);
        const Order = await models.Order.findAll({
            where: {
                user_id: user_id,
            },
        });
        const userOrder = Order.map((order) => order.toJSON());

        await Promise.all(
            userOrder.map(async (obj) => {
                const order_id = obj.order_id;

                const cartItem = cartdata.find((item) => item.product_id === obj.product_id);

                if (cartItem) {
                    await models.OrderDetails.bulkCreate([
                        {
                            order_id: order_id,
                            product_id: obj.product_id,
                            price: 600,
                            quantity: cartItem.quantity,
                        }
                    ])
                }
            })
        );
        const orderDetails = await models.OrderDetails.findAll();
        return orderDetails;
    }

}