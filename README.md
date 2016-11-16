# BurgersSequelize


Burger logger with MySQL, Node, Express, Handlebars and a Sequelize ORM!!

Functionality

It is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

The app will store every burger in a database, whether devoured or not.

TECHNOLOGIES USED:

MySQL, Node, Express,Express-Handlebars and a Sequelize ORM 
jQuery,HTML,css,javascript.

Process:
We sequelize init to make config. json.
Then we make a table in our terminal using this: sequelize model:create --name Burgers --attributes "name:string Devoured:boolean "
This creates an instance of a model in our models folder and generates burgers.js automatically.
This also makes migrations into our migrations folder.
We npm install and save all these packages.
All the dependencies are shown in package.json, which we created using npm init in our terminal.
To listen to our port in Commandline we can pass on : nodemon server.js (in terminal)

If we listen to the localhost then we type in our browser localhost 3000 and it renders the page because of handlebars.

Now our app is functioning on our browser.