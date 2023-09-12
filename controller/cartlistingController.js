const cartlistingService = require('../service/cartlistingService');

module.exports = {
    cartlisting: async function(req,res){
        const data = req.userdata;
        console.log(data);
        const cartListing = await cartlistingService.cartlist(data.name)
        res.json({
            cartListing: cartListing
        })
    }
}