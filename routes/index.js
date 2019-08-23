var express = require('express');
var router = express.Router();

const messages = [{text: "Hi there!", user: "Amando", added: new Date()},
                  {text: "Hello World!", user: "Charles", added: new Date()}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET form. */
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Message Form'}); //form.ejs, title variable
});

// POST form.
router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText.charAt(0).toUpperCase() + req.body.messageText.substring(1), user: req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1), added: new Date()})
  res.redirect('/') //redirect to home page
});

module.exports = router;
