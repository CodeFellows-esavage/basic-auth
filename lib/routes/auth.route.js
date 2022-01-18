'use strict';

const express = require('express');
const router = express.Router();

const { UserModel } = require('../models');
const basicAuth = require('../auth/basicAuth');

router.post('/signup', signUp);
router.post('/signin', basicAuth, (req, res) => {
  res.status(200).json(req.body.user);
});

async function signUp(req, res) {
  try {
    const record = await UserModel.create(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
}

module.exports = router;