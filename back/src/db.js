require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgress://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/estacionamiento`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);
