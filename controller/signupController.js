const signupService = require('../service/signupService');

module.exports = {
    signupfunc: async function(req,res){
        const data = req.body;
        console.log(data);
        const signup = await signupService.signupfunc({
            name: data.name,
            email: data.email,
            password: data.password
        })
        res.json({
            message: 'User signed up',
            data: signup
        });
    }
}