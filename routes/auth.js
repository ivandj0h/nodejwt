// Adding the Express Router
const router = require('express').Router();

// Adding User Model
const User = require('../model/User');

// The Validation
const Joi = require('@hapi/joi');
const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
}

//Creating The Actual Router Register
router.post('/register', (req, res) => {

    // Validate the data before creating a user
    const validation = Joi.validate(req.body, schema);
    res.send(validation);



    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    // try {
    //     const savedUser = await user.save();
    //     res.send(savedUser);
    // }catch(err) {
    //     res.status(400).send(err);
    // }
});

// Export this Router
module.exports = router;