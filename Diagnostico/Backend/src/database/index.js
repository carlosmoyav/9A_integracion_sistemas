require("dotenv").config();
const mongoose = require("mongoose");

const Connect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conexión exitosa a MongoDB");
    })
    .catch((err) => {
      console.error("Error de conexión a MongoDB:", err);
    });
};

module.exports = Connect;
