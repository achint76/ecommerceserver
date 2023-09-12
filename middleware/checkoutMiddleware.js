const profileService = require('../service/userprofileService');
const orderService = require('../service/orderService')

async function checkOut(req,res, next){
    const data = req.userdata;
    const userId = data.id;
    console.log(userId);
        const cartdata = await profileService.checkOut({
            id : userId
        });
        console.log(cartdata);
       
            const order = await orderService.insertOrder({
              cartdata
            });
            req.cartdata = cartdata;
            console.log("req.cartdata", req.cartdata);
            next();
    };
    
module.exports = {
    checkOut,
}