const categoryService = require('../service/categoryService');
module.exports = {
    createCategory: async function(req,res){
        const data = req.body;
        const category = await categoryService.createCategory({
            id: data.id,
            category_name: data.category_name,
            category_id: data.category_id
        });
        res.json({message:'Category Created', data: category});
    },
    getCategory: async function(req,res){
        const categories = await categoryService.getCategory();
        res.json({
            message: 'All Categories',
            data: categories
        }); //category
    },
    updateCategory: async function(req,res){
        const uid = req.params.id;
        const updatedCategory = req.body;
        const categoryUpdate = await categoryService.updateCategory({
        id: uid,
        category_name: updatedCategory.name,
        category_id: updatedCategory.category_id
        });
        res.json({
            message: 'Category updated', data: categoryUpdate
        })

    },
    deleteCategory: async function(req,res){
        const uid = req.params.id;
        const categoryDelete = await categoryService.deleteCategory({
            id: uid
        });
        res.json({message: 'Category deleted', data: categoryDelete})
    }
}