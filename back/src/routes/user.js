const { Router } = require("express");
const { controllerRegister } = require("../controllers/controllerRegister");

const userRoute = Router();

userRoute.post("/register", async (req, res) => {
  const { user, dni, password } = req.body;
  try {
    const response = await controllerRegister(user, dni, password);
    req.statusCode(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = userRoute;
