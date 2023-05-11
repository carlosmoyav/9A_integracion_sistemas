const { Prestamistas } = require("../models");

class PrestamistaService {
  async crear(req, res) {
    const prestamista = new Prestamistas(req.body);
    try {
      const prestamistaGuardado = await prestamista.save();
      return res.json({
        message: "Se creo el prestamista",
        datos: prestamistaGuardado,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error al crear el prestamista",
      });
    }
  }
}

module.exports = PrestamistaService;
