let _prestamistaservice = null;
class PrestamistaController {
  constructor({ PrestamistaService }) {
    _prestamistaservice = PrestamistaService;
  }
  Crear(req, res) {
    return _prestamistaservice.crear(req, res);
  }
}

module.exports = PrestamistaController;
