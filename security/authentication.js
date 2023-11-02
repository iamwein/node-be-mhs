const jwt = require("jsonwebtoken");
const secretKey = "secret";

const generateToken = (payload) => {
    const token = jwt.sign(payload, secretKey, {
        algorithm: "HS256",
        expiresIn: "24H",
    });
    return token;
};

module.exports = {
    generateToken,
};