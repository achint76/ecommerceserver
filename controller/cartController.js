const cartService = require('../service/cartService');

module.exports = {
    createCart: async function(req,res){
        const data = req.body;
        const cart = await cartService.createCart({
            id: data.id,
            product_id: data.product_id,
            user_id: data.user_id,
            quantity: data.quantity
        });
        res.json({message:'Cart Created', data: cart});
    },
    getCart: async function(req,res){
        const carts = await cartService.getCart();
        res.json({
            message: 'All Carts',
            data: carts
        });
    },
    // updateUser: async function(req,res){
    //     const uid = req.params.id;
    //     const updatedUser = req.body;
    //     const userUpdate = await userService.updateUser({
    //     id: uid,
    //     name: updatedUser.name,
    //     email: updatedUser.email,
    //     password: updatedUser.password
    //     });
    //     res.json({
    //         message: 'User updated', data: userUpdate
    //     })
//},
    deleteCart: async function(req,res){
        const uid = req.params.id;
        const cartDelete = await cartService.deleteCart({
            id: uid
        });
        res.json({message: 'Cart deleted', data: cartDelete})
    }
}