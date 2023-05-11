const mongoose = require("mongoose");
const { Schema } = mongoose;

const PrestamistaSchema = new Schema({
  nombre: { type: String },
  identificacion: { type: String },
});

module.exports = mongoose.model("Prestamista", PrestamistaSchema);
