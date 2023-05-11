const { Computadoras } = require("../models");

class ComputadoraService {
  async crear(req, res) {
    const computadora = new Computadoras(req.body);
    try {
      const computadoraGuardado = await computadora.save();
      return res.json({
        message: "Se creo la computadora",
        datos: computadoraGuardado,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error al crear la computadora",
      });
    }
  }
}

module.exports = ComputadoraService;
