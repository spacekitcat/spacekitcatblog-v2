var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'S P A C E K I T C A T',
    servername: os.hostname(),
    errstatus: 'EKEKEKEK'
  });
});

module.exports = router;
