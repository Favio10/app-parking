const { Op } = require("sequelize");
const { user } = require(".././db"); // Asegúrate de tener esta importación correcta
const bcrypt = require("bcrypt");
const saltRounds = 10;

const controllerRegister = async (req, res, next) => {
  console.log("Datos recibidos:", req.body);

  // Extraemos los datos del cuerpo de la solicitud
  const { username, email, password, dni, role = "customer" } = req.body; // Asignamos 'customer' como valor predeterminado para role

  // Validación de entrada
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
    throw new Error("El DNI es requerido");
  }

  // Verificación de existencia de usuario
  const userExist = await user.findOne({
    where: {
      [Op.or]: { email, username },
    },
  });
  if (userExist) {
    throw new Error("El correo o el username ya están en uso.");
  }

  // Hashing de la contraseña
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Creación del nuevo usuario
  const newUser = await user.create({
    username: username.toLowerCase(),
    email: email.toLowerCase(),
    password: hashedPassword,
    dni: dni.toLowerCase(), // Mantenemos el DNI en minúsculas para consistencia
    role: role.toLowerCase(), // Convertimos el rol a minúsculas para consistencia
    is_active: true, // El usuario se crea activo por defecto
  });

  // Respuesta exitosa
  res.status(201).json({
    message: "Usuario registrado con éxito.",
    user: {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      isActive: newUser.is_active,
    },
  });
};

module.exports = { controllerRegister };

//   return res.status(201).json({
//     message:
//       "Usuario registrado con éxito. Se ha enviado un correo electrónico de verificación.",
//     user: {
//       id: newUser.id,
//       username: newUser.username,
//       email: newUser.email,
//       dni: newUser.dni,
//     },
//   });
