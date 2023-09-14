const models = require('../models/index');
const inventoryService = require('../service/inventoryService');

module.exports = {
    inventoryquantity: async function(req, res, next){
        const cartdata = req.cartdata;
        const inventory = await inventoryService.decreasequantity({
            cartdata: cartdata

        });
        console.log(inventory);
        if(inventory == 0){
            res.status(404).json({
                message: `Product not found or out of stock`
            })
            return
        }
        next()
    },
     validateQuantity: async function(req,res,next){
        const data = req.body;
        const inventory = await inventoryService.validateQuantity({
            product_id:data.product_id,
            quantity: data.quantity
        })
        if( inventory == null || inventory == undefined || !inventory ){
            res.json({
                message:`Product Out Of Stock.`
            })
            return;
        }
        next();
    }

}