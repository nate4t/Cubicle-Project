var express = require('express');
var router = express.Router();
const Cube = require("../models/cube");
const Accessory = require('../models/accessory');


router.get('/:id', function(req, res, next) {
  Cube.findOne({_id: req.params.id}).populate('accessories') 
  .then((response) => {
      console.log('Cube to attach accessory to ', response);
      res.render('attach', { title: 'Attach Accessory', cube: response });
    })
  
});

router.post('/:id', function(req, res, next) {
  console.log('The attach form is ', req.body, req.params.id);
  Cube.findByIdAndUpdate({_id: req.params.id});
});


module.exports = router;