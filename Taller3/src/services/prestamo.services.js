const { Prestamos } = require("../models");
const {mongo} = require('mongoose');

class PrestamoService {
  async crear(req, res) {
    const prestamo = new Prestamos(req.body);
    try {
      const prestamoGuardado = await prestamo.save();
      return res.status(200).json({
        message: "Se creo el prestamo",
        datos: prestamoGuardado,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error al crear el prestamo",
      });
    }
  }
  async buscar(req, res) {
    try {
      const prestamo = await Prestamos.findById({
        _id: mongo.ObjectId(req.body.id),
      });
      return res.json({
        datos: prestamo,
      });
    } catch (error) {
      console.log(error)
      return res.status(404).json({
        message: "Error al buscar el prestamo",
      });
    }
  }
}

module.exports = PrestamoService;
