const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("prueba", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
  });
};
