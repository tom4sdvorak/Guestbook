var express = require('express');
var router = express.Router();
let book = require('../data/guestbook_data.json');

router.get('/', function(req, res, next) {
  res.render('guestbook', {data: book}); 
});


module.exports = router;