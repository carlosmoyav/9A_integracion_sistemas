const { Router } = require("express");

module.exports = function ({ PrestamoController }) {
  const router = Router();
  router.post("/Crear", PrestamoController.Crear);
  router.get("/Buscar", PrestamoController.Buscar);
  return router;
};
