const loginService = require('../service/loginService');
const jwtService = require('../service/jwtService');
// module.exports = {
//     loginfunc: async function(req,res){
//         const data = req.body;
//         const user = await loginService.loginfunc({
//             email: data.email,
//             password: data.password
//         });
        
//         const dbuser = user[0];
//         console.log(dbuser);
//         if(data.email == dbuser.email && data.password == dbuser.password){
//               res.json({
//                 message: "Logged in",
//                 Profile: user
//               })
//         }
//         else {
//             res.json({
//                 message : "Invalid Combination"
//             })
//         }

//     }
// }






async function loginfunc (req,res){
    const data = req.body;
    const user = await loginService.loginfunc({
        
        name: data.name,
        email: data.email,
        password: data.password
    });
    const dbUser = user[0];
    console.log(dbUser);
    if(data.email == dbUser.email && data.name == dbUser.name && data.password == dbUser.password)
    {
        const jwt = jwtService.createToken({
        
            name: dbUser.name,
            email: dbUser.email
        })
        res.json({
            message : "Logged In",
            Profile : user,
            JWTtoken: jwt
        })
    }
    else {
        res.json({
            message : "Invalid Combination"
        })
    }
}

module.exports = {
    loginfunc
}