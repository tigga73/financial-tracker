const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

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
  password: {
    type: DataTypes.VIRTUAL
  },
  password_hash: {
    type: DataTypes.STRING
  }
});

User.addHook('beforeSave', async user => {
  if (user.password) {
    user.password_hash = await bcrypt.hash(user.password, 8);
  }
});

module.exports = User;
