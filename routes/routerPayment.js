const express = require('express');
const router = express.Router();
const paymentController = require('./../controllers/PaymentController');


router
    .route('/new')
    .post(paymentController.nuevoPago)

module.exports = router;