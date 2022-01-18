'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { UserModel } = require('../models');

async function basicAuth(req, res, next) {

  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');
  console.log('password', password);

  try {
    const user = await UserModel.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    console.log(valid);
    if (valid) {
      req.body.user = user.dataValues;
      next();
    }
    else {
      next('Bad Login');
    }
  } catch (error) { res.status(403).send('Invalid Login'); }
}

module.exports = basicAuth;