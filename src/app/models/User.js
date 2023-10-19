const { Sequelize, DataTypes } = require('sequelize');

const databaseConfig = require('../../config/database');

const sequelize = new Sequelize(databaseConfig);

const User = sequelize.define('User', {
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password_hash: {
    type: DataTypes.STRING
  }
});

module.exports = User;
