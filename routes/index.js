var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A thing!' });
});

/* GET a 'foo' route. */
router.get('/foo', function(req, res, next) {
  res.render('foo', { title: 'foo' });
});

module.exports = router;
