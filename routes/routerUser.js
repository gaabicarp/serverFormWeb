const express = require('express');
const userController = require("../controllers/userController")
const router = express.Router();

router.route('/respuestas')
    .get((req,res)=>{
        res.send("Respuestas")
    });

router
    .route("/create")
    .post(userController.cargarUser)
    .get(userController.listarUser)

router
    .route("/login")
    .post(userController.Login)

module.exports = router