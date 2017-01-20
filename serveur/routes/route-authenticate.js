const router = require('express').Router();
const auth = require('../actions/authentication');

router.route('/api/users/login')
  .post((req, res) => {
    console.log(req.body);
    auth.authenticate(req, res);
  });

router.route('/api/users/logout')
  .post((req, res) => {
    auth.authenticateOut(req, res);
  });

module.exports = router;