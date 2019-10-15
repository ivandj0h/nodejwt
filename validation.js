// The Validation
const Joi = require('@hapi/joi');

// Function Register Validation
const registerValidaion = data => {
    const schema = {
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    };
    return Joi.validate(data, schema);
};

// Function Login Validation
const loginValidaion = data => {
    const schema = {
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    };
    return Joi.validate(data, schema);
};

module.exports.registerValidaion = registerValidaion;
module.exports.loginValidaion = loginValidaion;