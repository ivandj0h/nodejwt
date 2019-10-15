// Adding the Express Router
const router = require('express').Router();

/* 
Creating The Actual Router Register
*/
router.post('/register', (req, res) => {
    res.json({
        id: 1,
        content: "You're now Registered!"
    });
});

// Export this Router
module.exports = router;