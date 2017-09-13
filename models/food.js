var call = require('../config/orm.js');

var food = {

       all: function(cb) {
          call.selectAll("foods", function(res){
            // console.log("foods.all res: ", res);
            cb(res);
          });// end call.selectAll()
        },// end all
        insert: function(cols, vals, cb){
          call.insertOne("foods", cols, vals, function(res){
            cb(res);
          });// end call.insertFood()
        },// end insert
        update: function(objColVals, condition, cb){
          call.updateOne("foods", objColVals, condition, function(res){
            cb(res);
          });
        }
      };
      
module.exports = food;