const { Router } = require("express");
const {
  contRegisterOficial,
  contRegisterResidente,
  contListOficial,
  contListResidente,
  contDeleteOficial,
  contDeleteResidente,
  contRegistoEntrada,
  contRegistroSalida,
} = require("../controllers/controllerCars");

const carRoute = Router();

carRoute.post("/registerOficial", contRegisterOficial);
carRoute.post("/registerResidente", contRegisterResidente);
carRoute.get("/listarOficial", contListOficial);
carRoute.get("/listarResidente");
carRoute.get("/deleteOficial");
carRoute.get("/deleteResidente");
carRoute.get("/registroEntrada");
carRoute.get("/registroSalida");

// ver si aca se integrara el registro de entrada y salida

module.exports = carRoute;
