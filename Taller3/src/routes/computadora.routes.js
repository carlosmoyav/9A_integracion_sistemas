const { Router } = require("express");

module.exports = function ({ ComputadoraController }) {
  const router = Router();
  router.post("/Crear", ComputadoraController.Crear);
  return router;
};
