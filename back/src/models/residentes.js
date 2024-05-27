const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("residentes", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    placa: {},
    entrada: {},
    salida: {},
  });
};
