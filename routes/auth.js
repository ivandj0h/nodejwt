// Adding the Express Router
const router = require('express').Router();

// Adding Bcrypt Hashing Password
const bcrypt = require('bcryptjs');

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
router.post('/register', async (req, res) => {

    // Validate the data before creating a user
    const {error} = Joi.validate(req.body, schema);
    //res.send(validation);
    if(error) return res.status(400).send(error.details[0].message);

    // Checking if User already exist
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('The email already exist');

    // Hashing the Passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        //res.send(savedUser);
        res.send({
            userId: user.id,
            username: user.name,
            created_at: user.date,
            message: 'Congradulation, User was Created Successfully!'
        });
    }catch(err) {
        res.status(400).send(err);
    }
});

// Export this Router
module.exports = router;