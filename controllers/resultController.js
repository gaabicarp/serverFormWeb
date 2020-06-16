const Result = require('../models/Resultado');
const User = require('../models/Users')

const ResultController = {
    agregarResultado: async(req, res)=>{
        try{
            const user = await User.findById(req.body.Id)
            if(!user){
                return res.status(200).json({respuesta:'Usuario Inexistente', ok:0})
            }
            const nuevoResultado = new Result({
                DetalleEncuesta:{
                    CuidadoHogar:{
                        desengrasante: req.body.desengrasante,
                        limpiadorDePiso: req.body.limpiadorDePiso,
                        desinfectante: req.body.desinfectante,
                        limpiadorDeMuebles: req.body.limpiadorDeMuebles
                    },
                    Lavanderia:{
                        jabonliquido: req.body.jabonliquido,
                        JabonEnPolvo: req.body.JabonEnPolvo,
                        suavizante: req.body.suavizante,
                        blanqueador: req.body.blanqueador,
                        quitamanchas: req.body.quitamanchas
                    },
                    CuidadoPersonal:{
                        detergente:req.body.detergente,
                        pastaDental: req.body.pastaDental,
                        enjuageBucal: req.body.enjuageBucal
                    }
                },
                Resumen:{
                    totalMensual: req.body.totalMensual,
                    totalAnual: req.body.totalAnual,
                    totalBotellas: req.body.totalBotellas,
                    aceptaAhorro: req.body.aceptaAhorro,
                    aceptaAmbiente: req.body.aceptaAmbiente,
                    aceptaCambio: req.body.aceptaCambio
                },
                Cliente:{
                    clienteNombre: req.body.clienteNombre,
                    clienteTelefono: req.body.clienteTelefono,
                },
                OwnerId: req.body.Id,
                date: new Date().toLocaleString()

            })
            nuevoResultado.save()

            res.status(201).json({respuesta:'Respuesta Creada', ok:0})
        } catch(error){
            console.log(error)
            res.status(200).json({respuesta:err.message, ok:1})
        }
    },

    listarRespuestas: async(req,res)=>{
        try{
            let idreq = req.params.id
            const data = await Result.find({OwnerId: idreq});
            res.status(200).json({respuesta: data, ok:0})
        } catch(err){
            res.status(200).json({respuesta: err, ok:1})
        }
    },

}

module.exports = ResultController;