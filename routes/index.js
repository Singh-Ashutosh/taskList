//Dependencies
var express = require('express');
var router = express.Router();

//Route function
router.get('/', function (req, res, next) {
    res.render('index.html');
})

//Export Routes
module.exports = router;