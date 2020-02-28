const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mysql = require('mysql');
const path = require('path');

// Init Express app
const app = express();

// Connect to MySql
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "njsinfotech",
  database : 'test'
});

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Routes

app.use('/users', require('./routes/users'));

// DB message
app.get('/', (req, res) => {
    async = true;
    con.query("SELECT * FROM products", function(err, rows, fields){
        if (err) throw err
        res.render('home', { items: rows });
    })
});

app.listen(3001, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:port in a browser to see the output.

// <!-- <% for(var i=0; i < rows.length; i++) { %>
//     <tr>
//       <td><%= rows[i].id %></td>
//       <td><%= rows[i].user %></td>
//       <td><%= rows[i].PASS %></td>
//     </tr>
//  <% } %> -->