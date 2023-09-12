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

async function checkOut({ id }) {
  const data = await models.Cart.findAll({
    where: {
      user_id: id,
    },
  });

  // console.log(data);
  const cartData = [];
  for (let i = 0; i < data.length; i++) {
    cartData[i] = data[i].dataValues;
  }
  
  await models.Cart.destroy({
    where: {
      user_id: id,
    },
  });

  //  console.log(cartData);
  return cartData;
}

module.exports = {
    userProfile,
    checkOut
}