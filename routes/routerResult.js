const express = require('express');
const resultController = require('./../controllers/resultController')
const router = express.Router();

router
    .route('/add')
    .post(resultController.agregarResultado)

router
    .route('/:id')
    .get(resultController.listarRespuestas)


module.exports = router