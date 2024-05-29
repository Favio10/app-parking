const { Router } = require("express");
const { controllerLogin } = require("../controllers/controllerLogin");

const loginRoute = Router();

loginRoute.post("/", async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  try {
    const response = await controllerLogin(usernameOrEmail, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = loginRoute;
