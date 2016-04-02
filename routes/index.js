var express = require('express');
var router = express.Router();

var fileTree = require('../functions/fileTree')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(fileTree('public','charts'));
  res.render('index',
             {title: 'quantized selfie',
              tree: fileTree('public','charts')});
});

module.exports = router;
