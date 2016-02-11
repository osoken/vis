var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  res.json({});
});

router.get('/file', function(req, res, next)
{
  
});

module.exports = router;
