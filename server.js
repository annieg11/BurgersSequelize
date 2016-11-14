
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
// and we bring in our models folder. This brings in the model's object, as defined in index.js
var models = require('./models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize;
// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// make our tables
// note: force:true drops the table if it already exists
.then(function(){
  return sequelizeConnection.sync({force:true})
})



//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Get routes
var router = require('./controllers/burgers_controller.js');
app.use('/', router);



// Starts the server to begin listening
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})

