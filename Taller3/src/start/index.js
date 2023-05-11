require("dotenv").config();

const express = require("express");
let _express = null;
class Server {
  constructor({ router }) {
    _express = express().use(router);
  }
  async start() {
    return new Promise((resolve) => {
      _express.listen(process.env.PUERTO, () => {
        if (process.env.NODE_ENV !== "test") {
          console.log(`Server en el puerto ${process.env.PUERTO}`);
        }
      });
      resolve();
    });
  }
}
module.exports = Server;
