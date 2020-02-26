const express = require('express');
const router = express.Router();

// Start
router.get('/', (req, res) => {
    res.render('home');
});

// Cart
router.get('/cart', (req, res) => {
    res.render('cart');
});
//Login 
router.get('/signin', (req, res) => {
    res.render('login');
});

// Orders
router.get('/orders', (req, res) => {
    res.render('orders');
});

//Register
router.get('/register', (req, res) => {
    res.render('register');
});


module.exports = router;