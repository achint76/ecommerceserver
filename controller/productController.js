const productService = require('../service/productService');
module.exports = {
    createProduct: async function(req,res){
        const data = req.body;
        const product = await productService.createProduct({
            id: data.id,
            product_name: data.product_name,
            category_id: data.category_id,
            description: data.description,
            price: data.price
        });
        res.json({message:'Product Created', data: product});
    },
    getProduct: async function(req,res){
        const products = await productService.getProduct();
        res.json({
            message: 'All Products',
            data: products
        }); 
    },
    updateProduct: async function(req,res){
        const uid = req.params.id;
        const updatedProduct = req.body;
        const productUpdate = await productService.updateProduct({
        id: uid,
        product_name: updatedProduct.name,
        category_id: updatedProduct.category_id,
        description: updatedProduct.description,
        price: updatedProduct.price
        });
        res.json({
            message: 'Product updated', data: productUpdate
        })

    },
    deleteProduct: async function(req,res){
        const uid = req.params.id;
        const productDelete = await productService.deleteProduct({
            id: uid
        });
        res.json({message: 'Product deleted', data: productDelete})
    },

    findProduct: async function(req,res){
        const data = req.body;
        const product = await productService.findProduct({
            id:data.id
        })
        res.json({
            product : product
        })
    }
}