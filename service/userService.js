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
        return await models.User.update({
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
    
    validateEmail: async function ({ email }) {
        // Check if the email is undefined or null
        if (email === undefined || email === null) {
            throw new Error('Email is undefined or null');
        }
    
        // Basic email validation using a regular expression
        // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        // Check if the provided email matches the pattern
        // if (!emailPattern.test(email)) {
        //     throw new Error('Invalid email address');
        // }
    
        // Query the database to check if the email already exists
        const existingUser = await models.User.findOne({
            where: {
                email: email
            },
            raw: true
        });
    
        if (existingUser) {
            throw new Error('Email already exists');
        }
    
        // If the email is both defined, valid, and not already in use, proceed with your desired logic
        // ...
    
        // For example, you can continue with your database query here if needed
        const data = await models.User.findAll({
            where: {
                email: email
            },
            raw: true
        });
    
        const user = data[0];
        return user;
    }
    

}