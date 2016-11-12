// api-routes.js - this file offers a set of routes for displaying and saving data to the db

var burgers   = require("../models")["burgers"]; // Pulls out the burgers Model

// Routes
// =============================================================
module.exports = function(app){

  // Search for Specific burger (or all burgers) then provides JSON
  app.get('/api/:burgers?', function(req, res){

    // If the user provides a specific burgers in the URL...
    if(req.params.burgers){

      // Then display the JSON for ONLY that burgers.
      // (Note how we're using the ORM here to run our searches)
      burgers.findOne({
        where: {
          routeName: req.params.burgers
        }
      }).then(function(result){
        return res.json(result);
      })
    }

    // Otherwise...
    else{
      // Otherwise display the data for all of the burgers.
      // (Note how we're using Sequelize here to run our searches)
        burgers.findAll({})
          .then(function(result){
            return res.json(result);
        })
      };

  });

  // If a user sends data to add a new burger...
  app.post('/api/new', function(req, res){

    // Take the request...
    var burgers = req.body;

    // Create a routeName
    var burger_name = burgers.bname.replace(/\s+/g, '').toLowerCase();

    // Then add the burger to the database using sequelize
    burgers.create({
      burger_name: burgers.bname,
      devoured: burgers.devoured
      
    });

  })
}
