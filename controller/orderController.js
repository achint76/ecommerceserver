const orderService = require('../service/orderService');

module.exports = {
    createOrder: async function(req,res){
        const data = req.body;
        const order = await orderService.createOrder({
            id: data.id,
            user_id: data.user_id,
            order_id: data.order_id,
            total: data.total
        });
        res.json({message:'Order Created', data: order});
    },
    getOrder: async function(req,res){
        const orders = await orderService.getOrder();
        res.json({
            message: 'All Orders',
            data: orders
        });
    },
    // 
    deleteOrder: async function(req,res){
        const uid = req.params.id;
        const orderDelete = await orderService.deleteOrder({
            id: uid
        });
        res.json({message: 'Order deleted', data: orderDelete})
    }
}