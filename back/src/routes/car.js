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
carRoute.get("/listarResidente", contListResidente);
carRoute.get("/deleteOficial", contDeleteOficial);
carRoute.get("/deleteResidente", contDeleteResidente);
carRoute.get("/registroEntrada", contRegistoEntrada);
carRoute.get("/registroSalida", contRegistroSalida);

// ver si aca se integrara el registro de entrada y salida

module.exports = carRoute;
