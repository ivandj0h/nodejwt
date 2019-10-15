// Imports the Express Router
const router = require('express').Router();

// if we want to apply verify token into
// this route then we can write like this
const verify = require('./verifyToken');

// get 
router.get('/', verify, (req, res) => {
    res.json({
        post: {
            title: 'my first post',
            description: 'This is my first post that use for this blog',
            user_logged: req.user
        }
    });

    // just example below if we wants to get the user data
    //res.send(req.user);
    //User.findbyOne({_id: req.user})
});


module.exports = router;