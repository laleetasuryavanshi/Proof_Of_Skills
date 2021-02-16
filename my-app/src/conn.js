const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'harshu',
  database: 'boatdb'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
})
var records = [
    ['Yashwant', 'Chavan'],
    ['Diwakar', 'Patil'],
    ['Anoop', 'More']
];

var sql = "INSERT INTO student (firstname, lastname) VALUES ?";

var query = connection.query(sql, [records], function(err, result) {
console.log(result);
});

connection.end();;