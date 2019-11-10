const orm = require('../config/orm.js');

const theBurger = {
    selectAll: function(cb) {
      orm.selectAll('burger', function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne('burger', cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne('burger', objColVals, condition, function(res) {
        cb(res);
      });
    },
 
  };
  
  // Export the database functions for the controller 
  module.exports = theBurger;
  