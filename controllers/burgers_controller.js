/*
Here is where we create all the functions that will do the routing for our app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var models = require('../models');
var sequelizeConnection = models.sequelize;

// create routes
router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  models.burgers.findAll({}).then(function(data){

    var hbsObject = { burgers: data };
   // console.log(data);
    res.render('index', hbsObject);

  })
});
// To create an instance of a new burger
router.post('/burgers/create', function (req, res) {
    // Sequelize Query to add new burger to database
  models.burgers.create(
    {
      burger_name: req.body.bname,
      devoured: false
    }
  ).then(function(data){
    // After the burger is added to the database, refresh the page
    res.redirect('/index');
  });

});
// To update burgers on parameter id 
router.post('/burgers/update/:id', function (req, res) {
   // we are using aquery to find the burger will a selected id.
  models.burgers.findOne({ where: {id: req.params.id} })
  .then(function(id) {

  // now update devoured to true
    id.update({
      devoured: true
    })
    // After the burger is updated to the database, refresh the page
    .then(function(){
     res.redirect('/index');
    })
  });

});
router.delete('/burgers/delete/:id', function (req, res) {
   // we are using aquery to find the burger will a selected id.
  models.burgers.destroy({
   where: {
    id: req.params.id
  } 
 })
    // After the burger is updated to the database, refresh the page
     res.redirect('/index');
    })
 


module.exports = router;
