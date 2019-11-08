const orm = require('../config/orm.js');

const theBurger = {
    selectAll: function(cb) {
      orm.all('cats', function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.create('cats', cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.update('cats', objColVals, condition, function(res) {
        cb(res);
      });
    },
    // delete: function(condition) {
    //   orm.delete('cats', condition, function(res) {
    //     cb(res);
    //   });
    // },
  };
  
  // Export the database functions for the controller 
  module.exports = theBurger;
  