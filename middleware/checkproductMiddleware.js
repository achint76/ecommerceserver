const productService = require('../service/productService');
const inventoryService = require('../service/inventoryService');

async function checkProduct(req, res, next) {
    const data = req.body;
    const product = await productService.findProduct({
        id: data.product_id
    })
    const len = product.length
    console.log(len);
    if (len == 0 || len == undefined || len == null) {
        console.log("%%%%%%%%%%%");
        next();
    }
    else{
        console.log("@@@@@@@@");;
        const inventory = await inventoryService.updateInventory({
            price: req.body.quantity * req.body.price,
            product_id: req.body.product_id,
            quantity: req.body.quantity
        })
        return res.json({
            data: inventory
        })


































    }
}

module.exports = {
    checkProduct
}