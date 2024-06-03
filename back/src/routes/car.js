const { Router } = require("express");
const {} = require("../controllers/registerCar");

const carRoute = Router();

carRoute.post("/regOficial");
carRoute.post("/regResidente");
carRoute.post("listaOficial");
// aca deberia crear route para :
// registrar en db  vehiculo oficial
// registrar en db  vehiculo residente
// ver si aca se integrara el registro de entrada y salida

module.exports = carRoute;
