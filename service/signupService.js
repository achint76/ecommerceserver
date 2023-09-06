const models = require('../models/index');
module.exports = {
    signupfunc: async function({name, email, password}){
        return await models.User.create({
                  name: name,
                  email: email,
                  password: password
        });

    },
    
}