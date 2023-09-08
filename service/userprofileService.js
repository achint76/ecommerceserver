const models = require('../models/index');


    async function userProfile({name}){
        const user = await models.User.findOne({
            where: {
                name: name
            },
            raw: true,
        });
        if(!user){
        console.log(`User with name "${name}" not found.`);
        return null;
        }
        console.log(user);
    
    const userId = user.id;
    console.log(userId);
    const result = await models.User.findAll({
        attributes: ["name"],
        include: [
          {
            model:models.Cart,
            attributes: ["quantity"],
          },
          {
            model: models.Order,
            attributes: ["order_id", "total", "date"],
          },
        ],
        where: {
          id: userId,
        },
      });
      const Order = await models.Order.findAll({
        where: {
          user_id: userId,
        }
      });
    console.log(result);
    console.log(Order);
    return result;
}

module.exports = {
    userProfile,
}