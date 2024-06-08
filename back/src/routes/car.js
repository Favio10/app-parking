const { Router } = require("express");
const {
  contRegisterOficial,
  contRegisterResidente,
  contListOficial,
  contListResidente,
  contDeleteOficial,
  contDeleteResidente,
} = require("../controllers/registerCar");

const carRoute = Router();

carRoute.post("/registerOficial");
carRoute.post("/registerResidente");
carRoute.get("/listarOficial");
carRoute.get("/listarResidente");
carRoute.get("/deleteOficial");
carRoute.get("/deleteResidente");
carRoute.get("/registroEntrada");
carRoute.get("/registroSalida");

// ver si aca se integrara el registro de entrada y salida

module.exports = carRoute;
