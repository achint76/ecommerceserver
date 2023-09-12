const orderdetailsService = require('../service/orderdetailsService');

module.exports = {
    createOrderDetails: async function(req,res){
        const data = req.body;
        const orderdetails = await orderdetailsService.createOrderDetails({
            id: data.id,
            order_id: data.order_id,
            product_id: data.product_id,
            quantity: data.quantity,
            price: data.price
        });
        res.json({message:'Order Details Created', data: orderdetails});
    },
    getOrderDetails: async function(req,res){
        const orderdetails = await orderdetailsService.getOrderDetails();
        res.json({
            message: 'All Order Details',
            data: orderdetails
        });
    },
    // 
    deleteOrderDetails: async function(req,res){
        const uid = req.params.id;
        const orderdetailsDelete = await orderdetailsService.deleteOrderDetails({
            id: uid
        });
        res.json({message: 'Order details deleted', data: orderdetailsDelete})
    },
    addingOrderDetails: async function(req,res){
        const userData= req.userdata;
    const cartData= req.cartdata;
    console.log("cartData", cartData);
    // const OrderDetails = await orderdetailsService.addingOrderDetails({
    //     user_id:userData.id,
    //     cartdata:cartData
    // });
    const OrderDetails = await orderdetailsService.addingOrderDetails(userData.id, cartData);
    res.json({
        message:"Your order have placed",
        data: OrderDetails
    }) ;
    }
}