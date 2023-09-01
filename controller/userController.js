const userService = require('../service/userService');

module.exports = {
    createUser: async function(req,res){
        const data = req.body;
        const user = await userService.createUser({
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password
        });
        res.json({message:'User Created', data: user});
    },
    getUser: async function(req,res){
        const users = await userService.getUser();
        res.json({
            message: 'All Users',
            data: users
        });
    },
    updateUser: async function(req,res){
        const uid = req.params.id;
        const updatedUser = req.body;
        const userUpdate = await userService.updateUser({
        id: uid,
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password
        });
        res.json({
            message: 'User updated', data: userUpdate
        })

    },
    deleteUser: async function(req,res){
        const uid = req.params.id;
        const userDelete = await userService.deleteUser({
            id: uid
        });
        res.json({message: 'User deleted', data: userDelete})
    }
}