
const UserService = require('../service/userService');

module.exports = {
    validateUserName: function(req,res,next){
        const data = req.body;
        if(data.name == '' || data.name == null || data.name == undefined) {
            res.json({
                message: 'Invalid name of the user.'
            });
            return;
        }
        next();
    },
    }
