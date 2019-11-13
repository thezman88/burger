const mysql = require('mysql');

const connection = mysql.createConnection(process.env.NODE_ENV==='development'?require('./db-config'):process.env.JAWSDB_URL);

// var connection = mysql.createConnection({   host: "localhost",   port: 3306,   user: "root",   password: "rootroot",   database: "burgers_db" }); 

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
