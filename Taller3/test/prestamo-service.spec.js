const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const server = require('../index');

describe("Creacion de un prestamo", () => {
  let mongodb;
  beforeAll(async () => {
    mongodb = await MongoMemoryServer.create();
    const mongo_uri = mongodb.getUri();
    await server(mongo_uri);
  });
  afterAll((done) => {
    done();
  });
  describe("Crear Prestamo", () => {
    it("Se creo el prestamo", async () => {
      const api_uri = request("http://localhost:3000");
      await api_uri
        .post("/Prestamo/Crear")
        .send({
          id_computadora: "1234",
          id_prestamista: "1234",
          fecha: "10/5/2023",
          hora: "10:00",
          numero_horas: "4 horas",
        })
        .expect(200);
    });
  });
});