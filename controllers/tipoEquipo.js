const tipoEquipo = require('../models/tipoEquipo')
const { request, response } = require('express')

/**
 * Creación
 */
const createTipoEquipo = async (req = request,
    res = response) => {
    try {
        const nombre = req.body.nombre
        console.log(req.body)
            ? req.body.nombre.toUpperCase()
            : ''
        const tipoEquipoBD = await tipoEquipo.findOne({ nombre })
        if (tipoEquipoBD) {
            return res.status(400).json({ msg: 'Ya existe' })
        }
        const data = {
            nombre
        }
        const TipoEquipo = new tipoEquipo(data)
        //console.log(tipoEquipo)
        await TipoEquipo.save()
        return res.status(201).json(tipoEquipo)
    } catch (e) {
        return res.status(500).json({
            msg: e
        })
    }

}

/**
 * Edición
 */


/**
 * Listar todos
 */
const getTipoEquipos = async (req = request,
    res = response) => {
    try {
        const { estado } = req.query;

        const tipoEquiposDB = await tipoEquipo.find({ estado })
        //select * from tipoequipo where estado = ?;
        return res.json(tipoEquiposDB)
    } catch (e) {
        return res.status(500).json({
            msg: e
        })
    }
}

module.exports = { createTipoEquipo, getTipoEquipos }