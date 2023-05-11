const { Router } = require("express");

module.exports = function ({ PrestamistaController }) {
  const router = Router();
  router.post("/Crear", PrestamistaController.Crear);
  return router;
};
