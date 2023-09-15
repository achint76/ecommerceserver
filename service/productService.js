const models = require('../models/index')
module.exports = {
    createProduct: async function({product_name, category_id, description, price}){
        return await models.Product.create({
            product_name: product_name,
            category_id: category_id,
            description: description,
            price: price
            
        });
    },
    getProduct: async function(){
        return await models.Product.findAll();
    },
    updateProduct: async function({id, product_name, category_id, description, price}){
        return await models.Product.update({
            product_name: product_name,
            category_id: category_id,
            description: description,
            price: price
        }, {
            where: {
                id: id
            }
        })
    },
    deleteProduct: async function({id}){
        console.log(id);
        return await models.Product.destroy({
            where: {
                id: id
            }
        });
    },
    findProduct: async function({id}){
        const product = await models.Inventory.findAll({
            where:{
                product_id: id
            }            
        });
        const allProduct = product.map(product=> product.toJSON());
        return (allProduct);
    }

}