//const logShim = require('npm/lib/utils/log-shim');
const inventoryService = require('../service/inventoryService');

module.exports = {
    addtoinventory: async function(req,res){
        const data = req.body;
        const inventory = await inventoryService.addtoinventory({
            id: data.id,
            product_id: data.product_id,
            price: data.quantity * data.price,
            quantity: data.quantity
           
        })
        console.log(data.quantity);
        res.json({
            message: `${data.quantity} pieces Product added to inventory`,
            AddedProduct: inventory
        })
    }, 
    //decreasequantity: async function(req,res){
        
   // }
}