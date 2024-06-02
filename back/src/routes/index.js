const { Router } = require("express");

const login = require("./login");
const user = require("./user");
const car = require("./car");

const router = Router();

router.use("/login", login);
router.use("/user", user);
router.use("/registerCar", car);

module.exports = router;
