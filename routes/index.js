var express = require('express');
var router = express.Router();
const Cube = require('../models/cube');

/* GET home page. */
router.get('/', function(req, res, next) {
  Cube.find().then((cube) => {
    res.render('index', {title:"Cubicle", cube: cube});
  });
});
module.exports = router;