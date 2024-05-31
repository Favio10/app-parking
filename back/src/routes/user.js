const { Router } = require("express");
const { controllerRegister } = require("../controllers/controllerRegister");

const userRoute = Router();

// userRoute.post("/register", async (req, res) => {
//   const { email, username, dni, password } = req.body;
//   try {
//     const newUser = await controllerRegister(email, username, dni, password);
//     res.status(201).json({
//       message: "Usuario registrado con éxito.",
//       user: {
//         id: newUser.id,
//         username: newUser.username,
//         email: newUser.email,
//         dni: newUser.dni,
//       },
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

userRoute.post("/register", controllerRegister);

module.exports = userRoute;
