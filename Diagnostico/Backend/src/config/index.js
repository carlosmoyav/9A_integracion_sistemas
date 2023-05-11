if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  PUERTO: process.env.PORT,
  DB_URI: process.env.MONGO_URI,
};
