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
});

// User.beforeCreate(async user => {
//   user.password = await bcrypt.hash(user.password, 10);
// });

module.exports = User;