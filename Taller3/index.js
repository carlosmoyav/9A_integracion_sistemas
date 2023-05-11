require("dotenv").config();
const container = require("./src/start/container");
const server = container.resolve("app");
const mongoose = require("mongoose");

const DB_MONGO = process.env.MONGO_URL;

module.exports = async (DB_MONGO) => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(DB_MONGO, { useNewUrlParser: true })
    .then(() => {
      server.start();
      console.log("Conectado a la base de datos");
    })
    .catch(console.log);
};

if (process.env.NODE_ENV !== "test") {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(DB_MONGO, { useNewUrlParser: true })
    .then(() => {
      server.start();
      console.log("Conectado a la base de datos");
    })
    .catch(console.log);
}