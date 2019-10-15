// Adding the Express Router
const router = require('express').Router();

// Adding User Model
const User = require('../model/User');

// Adding The Validation
const {registerValidation, loginValidaion} = require('../validation');

//Creating The Actual Router Register
router.post('/register', async (req, res) => {

    // Validate the data before creating a user
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err) {
        res.status(400).send(err);
    }
});

// Export this Router
module.exports = router;