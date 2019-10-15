// Adding the Express Router
const router = require('express').Router();

/* 
Creating The Actual Router Register
*/
router.post('/register', (req, res) => {
    res.send('Registered!');
});

// Export this Router
module.exports = router;