'use strict';

function err403(err, req, res, next) {
  if (err === 'Bad Login') {
    console.log('Bad Login');
    res.status(403).send('Bad Login');
  }
}

module.exports = err403;