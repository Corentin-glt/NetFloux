const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const BluebirdPromise = require('bluebird');
const User = require('../models/users');
const config = require('../config');

const jwtVerifyAsync = BluebirdPromise.promisify(jwt.verify);

module.exports = {
  authenticate(req, res) {
    const token = jwt.sign({token: uuid.v4()}, config.secret,
      {expiresIn: 1440});
    User.actions.login(req.body.email, req.body.password, token)
      .then(user => {
        if (user) {
          res.status(200).send({
            user: user,
            access_token: token,
            account_id: user.id,
            message: 'Enjoy your token!'
          });
        } else {
          res.status(400).send({
            message: 'Authentication failed!'
          });
        }
      }).catch(err => res.status(400).send(err || err.error));
  },
  authenticateOut(req, res) {
    const token = req.body.token || req.query.token;
    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.status(400).send(err || err.error);
        } else {
          return User.actions.logout(token)
            .then(() => {
              res.status(200).end();
            })
            .catch((err) => {
              res.status(400).send(err || err.error);
            });
        }
      });
    } else {
      res.status(400).send({
        message: 'Token hasn\'t been found!'
      });
    }
  },
  isAuth(req, res){
    const token = req.body.token || req.query.token;
    if(token){
      User.actions.findByToken(token)
      .then(user => {
        res.status(200).send({
          user: user
        });
      })
      .catch(err => {
        res.status(400).send({
          message:"No user founded"
        });
      });
    } else {
      res.status(400).send({
        message: 'Token hasn\'t been found!'
      });
    }
  }
};