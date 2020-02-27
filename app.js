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
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// DB message
let obj = {};
con.connect(function (err, req,res) {
    if(err) {
        console.log(err);
    } else
        console.log('Connected to Server');
        // Mysql Query
        con.query("SELECT * FROM products", function (err, result) {
            if(err) throw err;
            let obj = { obj : result}
            // app.use(path.join(__dirname, 'index'), require('./routes/index'));
            console.log(result);
            
        });
})

app.listen(3001, () => {
    console.log('Example app listening on port 3001!');
});

//Run app, then load http://localhost:port in a browser to see the output.

// <!-- <% for(var i=0; i < rows.length; i++) { %>
//     <tr>
//       <td><%= rows[i].id %></td>
//       <td><%= rows[i].user %></td>
//       <td><%= rows[i].PASS %></td>
//     </tr>
//  <% } %> -->