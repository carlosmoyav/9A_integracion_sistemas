const mongoose = require("mongoose");
const { Schema } = mongoose;

const ComputadoraSchema = new Schema({
  descripcion: { type: String },
  detalle: { type: String },
  costo: { type: String },
});

module.exports = mongoose.model("Computadora", ComputadoraSchema);
