const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const UserController = {
    cargarUser: async(req,res, next)=>{
        try{
            var comprobarEmail = await User.findOne({'Email': req.body.Email})
            if(comprobarEmail!=null){
                throw new SyntaxError("Usuario Existente")
            }

            if(!req.body.Email || !req.body.Password){
                throw new SyntaxError('Datos Incompletos')
            }

            const nuevoUser = new User({
                Email: req.body.Email,
                Password: req.body.Password
            })

            bcrypt.genSalt(10).then(salts=>{
                bcrypt.hash(req.body.Password, salts).then(hash=>{
                    nuevoUser.Password = hash;
                    nuevoUser.save();
                }).catch(error=>{
                    console.log(error)
                }).catch(error=>{
                    console.log(error)
                })
            })

            res.status(201).json({respuesta:'Usuario Creado', ok: 0})
        } catch(err){
            console.log(err)
            res.status(200).json({respuesta: err.message, ok:1})
        }
    },

    listarUser: async (req,res)=>{
        const data = await User.find();
        res.status(200).json({respuesta: data});
    },

    Login: async (req,res) =>{
        let Email = req.body.Email;
        let Password = req.body.Password;
        await User.findOne({"Email": Email})
            .then(user =>{
                console.log(user)
                if(!user) return res.send({message: 'El email no esta registrado', ok: 1});
                bcrypt.compare(Password, user.Password)
                    .then(match =>{
                        if(match){
                            //ACCESO
                            console.log("entro")
                            payload = {
                                id: user._id,
                                Email: user.Email,
                                }
                            jwt.sign(payload,process.env.SECRET_TOKEN,function(error, token){
                                if(error){
                                    res.status.send({message:error, ok:1})
                                }
                                else{
                                    res.status(200).send({message: 'Acceso',token: token, ok:0})
                                }
                            } )
                        }
                        else{
                            res.status(200).send({message: 'Pw incorrecta', ok:1})//No doy acceso
                        }
                    }).catch(error => {
                        console.log(error);
                        res.status(500).send({error})
                    })
            }).catch(error =>console.log(error))
        }
    
}

module.exports = UserController;