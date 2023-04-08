require("dotenv").config();
const express = require("express");
const Connect = require("./src/database");
const { Pacientes, Computadora } = require("./src/models");
const mongoose = require("mongoose");

const port = process.env.PUERTO;

const app = express();
app.use(express.json());

Connect();

app.post("/api/crear/computadora", async (req, res) => {
  var datos = req.body;
  try {
    const computadora = {
      descripcion: datos.descripcion,
      detalle: datos.detalle,
      costo: datos.costo,
    };
    await Computadora.create(computadora, function (err, computadora) {
      if (!err) {
        return res.status(200).json({
          message: "se agrego la computadora",
          datos: computadora,
        });
      } else {
        return res.status(500).json({ err });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en la API",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
