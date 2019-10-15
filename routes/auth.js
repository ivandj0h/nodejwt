// Adding the Express Router
const router = require('express').Router();

// Adding User Model
const User = require('../model/User');

//Creating The Actual Router Register
router.post('/register', async (req, res) => {
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