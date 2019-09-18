var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/aa05', function(req, res, next) {
  res.render('aa05', { title: 'Express App',
  						id: 'AA05',
  						name: 'Inje-AA05' });
});

module.exports = router;
