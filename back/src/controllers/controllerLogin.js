const controllerLogin = async (usernameOrEmail, password) => {
  console.log("Datos recibidos", { usernameOrEmail, password });

  if (!usernameOrEmail) {
    throw new Error("El nombre de usuario o correo electrónico es requerido.");
  }
  if (!password) {
    throw new Error("La contraseña es requerida");
  }

  return { success: true, message: "inicio de sesión exitoso" };
};

module.exports = { controllerLogin };
