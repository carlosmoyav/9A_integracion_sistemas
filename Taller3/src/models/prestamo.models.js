const mongoose = require("mongoose");
const { Schema } = mongoose;

const PrestamoSchema = new Schema({
  id_computadora: { type: String },
  id_prestamista: { type: String },
  fecha: { type: String },
  hora: { type: String },
  numero_horas: { type: String },
});

module.exports = mongoose.model("Prestamo", PrestamoSchema);