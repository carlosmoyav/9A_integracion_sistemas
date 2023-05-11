let _prestamoservice = null;
class PrestamoController {
  constructor({ PrestamoService }) {
    _prestamoservice = PrestamoService;
  }
  Crear(req, res) {
    return _prestamoservice.crear(req, res);
  }
  Buscar(req, res) {
    return _prestamoservice.buscar(req, res);
  }
}

module.exports = PrestamoController;
