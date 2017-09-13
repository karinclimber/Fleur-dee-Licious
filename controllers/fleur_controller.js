var express = require('express');
var food = require('../models/food.js');
var router = express.Router();


router.get('/', function(req, res){
    console.log('got it');
    food.all(function(data){
        var hbsObject = {
            foods: data
        };
        res.render("index", hbsObject);
    });
});


router.post('/foods', function(req, res){
    console.log('post it', req);
    food.insert([
        'food_name', "eaten"
      ], [
        req.body.foodname, 0
      ], function(data) {
        res.redirect('/');
      });
    });

router.put('/foods/:id', function(req, res){
  
    console.log('put it', req.params.id);
    var condition = 'id = ' + req.params.id;
    food.update({
        eaten: true
    }, condition, function(data){
    console.log('put.id: ' + req.body.id);
    res.redirect('/');
    });
});

module.exports = router;