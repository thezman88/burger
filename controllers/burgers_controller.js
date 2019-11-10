const express = require('express');

const router = express.Router();

const theBurger = require('../models/burger.js');

router.get('/', function(req, res) {
    theBurger.selectAll(function(data) {
      const hbsObject = {
        burger: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post('/api/burger', function(req, res) {
    console.log(req.body)
    theBurger.insertOne(
        ['burger_name', 'devoured'],
        [req.body.burger_name, req.body.devoured],
        function(result) {
          // Send back the ID of the new quote
          
        });
        res.sendStatus(200)
  
  });
  
  router.put('/api/burger/:id', function(req, res) {
    const condition = 'id = ' + req.params.id;
  
    console.log('condition', condition);
  
    theBurger.updateOne(
        {
          devoured: true,
        },
        condition,
        function(result) {
          if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
        },
    );
      });

  
  // Export routes for server.js to use.
  module.exports = router;
  