var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* SET home page. */
router.post('/', function(req, res, next) {
  res.redirect('/login');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* SET login page. */
router.post('/login', function(req, res, next) {
  var nome = req.body.nome;
  var idade = req.body.idade;
  res.redirect('/?nome=' + nome);
});

module.exports = router;
