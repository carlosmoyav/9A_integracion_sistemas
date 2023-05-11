const { createContainer, asClass, asFunction } = require("awilix");

const app = require(".");

const {
    ComputadoraRoutes,
    PrestamistaRoutes,
    PrestamoRoutes,
} = require("../routes/index.routes");

const {
    ComputadoraController,
    PrestamistaController,
    PrestamoController,
} = require("../controllers");

const {
    ComputadoraService,
    PrestamistaService,
    PrestamoService,
} = require("../services");

const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
  })
  .register({
    ComputadoraService: asClass(ComputadoraService).singleton(),
    PrestamistaService: asClass(PrestamistaService).singleton(),
    PrestamoService: asClass(PrestamoService).singleton(),
  })
  .register({
    ComputadoraController: asClass(
      ComputadoraController.bind(ComputadoraController)
    ).singleton(),
    PrestamistaController: asClass(
      PrestamistaController.bind(PrestamistaController)
    ).singleton(),
    PrestamoController: asClass(
      PrestamoController.bind(PrestamoController)
    ).singleton(),
  })
  .register({
    ComputadoraRoutes: asFunction(ComputadoraRoutes).singleton(),
    PrestamistaRoutes: asFunction(PrestamistaRoutes).singleton(),
    PrestamoRoutes: asFunction(PrestamoRoutes).singleton(),
  });

module.exports = container;
