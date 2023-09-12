const models = require('../models/index');

module.exports = {
    cartlist: async function(name){
        const user = await models.User.findAll({
            where: {
                name: name
            },
            raw: true
        })
        
        const userData = user[0];
        const userId = userData.id;
        console.log(userData);
        console.log(userId);

        const data = await models.Cart.findAll({
            where: {
                user_id:userId
            }
        })
        if(data)
        {
            return data;
        }
        else throw err;
    }
}