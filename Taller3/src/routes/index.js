const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");

module.exports = function ({ ComputadoraRoutes, PrestamistaRoutes, PrestamoRoutes }) {
  //const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  apiRoutes.use("/Computadora", ComputadoraRoutes);
  apiRoutes.use("/Prestamista", PrestamistaRoutes);
  apiRoutes.use("/Prestamo", PrestamoRoutes);
  return apiRoutes;
};
