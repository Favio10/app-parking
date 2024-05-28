const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("no_residentes", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entrada: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Fecha y hora de entrada al estacionamiento",
    },
    salida: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Fecha y hora de salida del estacionamiento",
    },
    costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "Costo calculado basado en el tiempo de estancia",
    },
  });
};
