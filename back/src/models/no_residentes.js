const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("no_residentes", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
  });
};
