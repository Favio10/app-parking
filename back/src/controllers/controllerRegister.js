const { Op } = require("sequelize");
const { user } = require("../db");

const controllerRegister = async (email, username, dni, password) => {
  console.log("datos recibidos:", { email, username, dni, password });
  if (!email) {
    throw new Error("El nombre de usuario o correo electrónico es requerido.");
  }
  if (!username) {
    throw new Error("El nombre de usuario o correo electrónico es requerido.");
  }
  if (!password) {
    throw new Error("La contraseña es requerida");
  }
  if (!dni) {
    throw new Error("El dni es requerido");
  }

  const userExist = await user.findOne({
    where: {
      [Op.or]: { email, username },
    },
  });
  if (userExist) {
    return res.status(200).json({
      message: "El correo o el username ya estan en uso",
    });
  }

  return { success: true, message: "inicio de sesión exitoso" };
};
module.exports = { controllerRegister };
