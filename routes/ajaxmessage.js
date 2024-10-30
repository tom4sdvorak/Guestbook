var express = require('express');
var router = express.Router();
var fs = require('fs');
var book = require('../data/guestbook_data.json');


router.post('/', function(req, res, next) {
  let newId = parseInt(book[book.length-1].id) + 1;
  let newDate = new Date();
  book.push({id: newId, username: req.body.username, country: req.body.country, date: newDate, message: req.body.message});
  fs.writeFile('./data/guestbook_data.json', JSON.stringify(book, null, 2), (err) => {
    if(err) throw err;
    console.log("File saved");
    res.json(book);
  });
});

module.exports = router;
