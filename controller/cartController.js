const cartService = require('../service/cartService');
const models = require('../models/index');
const { Op } = require('sequelize')
module.exports = {
    createCart: async function(req,res){
        const data = req.body;
        const userData = req.userdata
        const cart = await cartService.createCart({
           
            product_id: data.product_id,
            user_id: userData.id,
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
    },

    addtocart: async function(req, res) {
        const data = req.body;
        const userdata = req.userdata;
        // console.log(userdata);
        const userId = userdata.id;
        // console.log(userId);
        const result = await cartService.addonemore({
          product_id: data.product_id,
          id: userId,
        });
        const count = result.length;
      console.log(count,"<-----------count");
      
        if (count == 0 || count == null || count == undefined) {
          const price = await cartService.findprice({
            product_id: data.product_id,
            quantity: data.quantity,
          });
          console.log(price,"<----------");
      
          const cart = await cartService.createCart({
            product_id: data.product_id,
            quantity: data.quantity,
            user_id: userId,
            price: price,
          });
          res.json({
            message: " Added to Cart",
            data: cart,
          });
        }
      
        else {
      
          const price = await cartService.findprice({
            
            product_id: data.product_id,
            quantity: data.quantity,
          });
          await models.Cart.update(
            {
              quantity: models.sequelize.literal(`quantity+${data.quantity}`),
              price: models.sequelize.literal(`price + ${price}`)
            },
            {
              where: {
                [Op.and]: [{ user_id: userId }, { product_id: data.product_id }],
              },
            }
          );
          const cartdata = await models.Cart.findAll({
            where :{
              [Op.and]: [
                [{ user_id: userId }, { product_id: data.product_id }]
              ]
            }
          });
          res.json({
            updatedCart: cartdata
          })
        }
},
cartremove: async function(req,res){

  const userdata = req.userdata;
  console.log(userdata);
  const data = req.body;
  const cart = await cartService.removeCart({
    product_id: data.product_id,
    user_id: data.user_id
    
  });
 // console.log(product_id, "product_id");
   // console.log(user_id, "user_id");
  res.json({
    message: `${data.product_id} removed from cart`,
    data: cart,
  });
}
}