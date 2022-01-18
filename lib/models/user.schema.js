'use strict';

const bcrypt = require('bcrypt');

const User = (sequelize, DataTypes) => sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: async (user) => {
      console.log('beforeCreate Hook:', user);
      user.password = await bcrypt.hash(user.password, 10);
    },
  },
});

module.exports = User;