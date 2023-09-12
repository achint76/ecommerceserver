const { sign, verify } = require("jsonwebtoken");
const createToken = function ({name, email, id}){
    const accessToken = sign({
        name, email, id
    }, "createJwtToken")
    return accessToken;
};

module.exports = {
    createToken
}
