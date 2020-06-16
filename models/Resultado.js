const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
    DetalleEncuesta:{
        CuidadoHogar:{
            desengrasante: {
                type: Object,
                default: null
            },
            limpiadorDePiso:{
                type: Object,
                default: null
            },
            desinfectante : {
                type: Object,
                default: null
            },
            limpiadorDeMuebles: {
                type: Object,
                default: null
            }
        },
        Lavanderia:{
            jabonliquido: {
                type: Object,
                default: null
            },
            JabonEnPolvo: {
                type: Object,
                default: null
            },
            suavizante: {
                type: Object,
                default: null
            },
            blanqueador: {
                type: Object,
                default: null
            },
            quitamanchas: {
                type: Object,
                default: null
            },
        },
        CuidadoPersonal:{
            detergente: {
                type: Object,
                default: null
            },
            pastaDental: {
                type: Object,
                default: null
            },
            enjuageBucal: {
                type: Object,
                default: null
            },
        }
    },
    Resumen:{
        totalMensual: {
            type: Object,
            default: null
        },
        totalAnual: {
            type: Object,
            default: null
        },
        totalBotellas: {
            type: Object,
            default: null
        },
        aceptaAhorro: {
            type: Object,
            default: null
        },
        aceptaAmbiente: {
            type: Object,
            default: null
        },
        aceptaCambio: {
            type: Object,
            default: null
        },
    },
    Cliente:{
        clienteNombre: {
            type: String,
            require:true,
        },
        clienteTelefono: {
            type: Number,
            require:true,
        },
    },
    OwnerId:{
        type: mongoose.Schema.ObjectId, 
        ref: "User",
        require: true,
    },
    date:{
        type: Date,
    }
})

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;