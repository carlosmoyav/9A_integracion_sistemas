const mongoose = require("mongoose");
const { Schema } = mongoose;

const ComputadoraSchema = new Schema({
  descripcion: { type: String },
  detalles_tecnicos: { type: String },
  costo_por_hora: { type: String },
});

module.exports = mongoose.model("Computadora", ComputadoraSchema);
