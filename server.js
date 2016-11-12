
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
// add the burgers model and sync it.
// Syncing the model will create a matching table in our MySQL db. 
var burgers = require("./models")["burgers"]
burgers.sync(); // creates a burgers table

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
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Starts the server to begin listening
var port = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})

