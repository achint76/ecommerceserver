const models = require('../models/index')
module.exports = {
    createCategory: async function({category_name, category_id}){
        return await models.Category.create({
            //id: id,
            category_name: category_name,
            category_id: category_id
            
        });
    },
    getCategory: async function(){
        return await models.Category.findAll();
    },
    updateCategory: async function({id,category_name, category_id}){
        return await models.Category.update({
            category_name: category_name,
            category_id: category_id
        }, {
            where: {
                id: id
            }
        })
    },
    deleteCategory: async function({id}){
        console.log(id);
        return await models.Category.destroy({
            where: {
                id: id
            }
        });
    },

}