const express = require('express');
const router = express.Router();

// Start
router.get('/', (req, res) => {
    res.render('home');
});

//Login 
router.get('/cart', (req, res) => {
    res.render('cart');
});

//Register
router.get('/register', (req, res) => {
    res.render('register');
});


module.exports = router;