const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mysql = require('mysql');

// Init Express app
const app = express();

// Connect to MySql
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "njsinfotech",
  database : 'test'
});

// DB message
con.connect((function(err) {
  if (err) throw err;
  
  console.log('connected as id ');
}));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:port in a browser to see the output.