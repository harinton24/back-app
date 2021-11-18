const { response } = require('express');
const Paquete = require('../../models/package/Paquetes');



const getPaquetes = async( req, res = response ) => {

    const paquetes = await Paquete.find().populate('user','name');

    res.json({
        ok: true,
        paquetes
    });
}

const crearPaquete = async ( req, res = response ) => {

    const paquete = new Paquete( req.body );

    try {

        paquete.user = req.uid;
        
        const PaqueteGuardado = await paquete.save();

        res.json({
            ok: true,
            paquete: PaqueteGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}




module.exports = {
    crearPaquete,
    getPaquetes
  
}