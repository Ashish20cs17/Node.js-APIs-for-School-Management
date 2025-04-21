const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // default user in XAMPP
  password: '',           // default password is usually blank
  database: 'school_db'   // make sure this matches your database name
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

module.exports = connection;

