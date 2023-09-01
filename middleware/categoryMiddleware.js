const CategoryService = require('../service/categoryService');

module.exports = {
    validateCategoryName: function(req,res,next){
        const data = req.body;
        if(data.category_name == '' || data.category_name == null || data.category_name == undefined) {
            res.json({
                message: 'Invalid name of the category.'
            });
            return;
        }
        next();
    },
    }
