const models = require('../models/index');

module.exports = {
    createUser: async function({name, email, password}){
        return await models.User.create({
            //id: id,
            name: name,
            email: email,
            password: password
            
        });
    },
    getUser: async function(){
        return await models.User.findAll();
    },
    updateUser: async function({id,name, email, password}){
        return await models.Category.update({
            name: name,
            email: email,
            password: password
        }, {
            where: {
                id: id
            }
        })
    },
    deleteUser: async function({id}){
        console.log(id);
        return await models.User.destroy({
            where: {
                id: id
            }
        });
    },

}