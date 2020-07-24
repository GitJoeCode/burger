var mysql = require('mysql');
var connection


connection = mysql.createConnection({
    username: "root",
    password: "",
    database: "burgers_db",
    host: "127.0.0.1",
    port: 3306
});


connection.connect(function(err){
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;