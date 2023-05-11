let _computadoraservice = null;
class ComputadoraController {
  constructor({ ComputadoraService }) {
    _computadoraservice = ComputadoraService;
  }
  Crear(req, res) {
    return _computadoraservice.crear(req, res);
  }
}

module.exports = ComputadoraController;
