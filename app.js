const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true})); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static(process.cwd()+'/public'));

// Templating Engine
app.engine('hbs', exphbs( {extname: '.hbs' }));
app.set('view engine', 'hbs');

// Connection Pool
// You don't need the connection here as we have it in userController
// let connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });
 


const teacherroutes = require('./server/routes/teacher');
const studentroutes = require('./server/routes/student');
const subjectroutes = require('./server/routes/subject');

                 
app.use('/teachers', teacherroutes);
app.use('/students', studentroutes);
app.use('/subjects', subjectroutes);


//app.use('/',routes);
app.get ("/",function(req,res){
    res.render("home");
 });
app.listen(port, () => console.log(`Listening on  https://localhost:${port}`));