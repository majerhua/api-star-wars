const { Sequelize, DataTypes } = require("sequelize");
const { getSecretManager } = require("../secret_manager/secret_manager");

const getSequelize = async () => {
  const secretManager = await getSecretManager();
  const secret = JSON.parse(secretManager.SecretString);

  const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = secret;

  return new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: process.env.DB_DIALECT,
  });
};

module.exports.getSequelize = getSequelize;
module.exports.DataTypes = DataTypes;
