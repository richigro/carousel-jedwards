const mysql = require('mysql');

const connection = mysql.createConnection({

  host: 'banana.ch6x4sgjhqod.us-west-2.rds.amazonaws.com',
  user: 'root',
  password: 'Unlucky1!',
  database: 'products',
});

connection.connect();

module.exports = {connection}