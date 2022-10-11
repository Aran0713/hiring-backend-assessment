import mysql from "mysql";

// You would have to change the names to match your server
var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "datatest"
});
connection.connect(function(err){
    if (err) throw err;
    console.log("Node connected to mysql server");
});

export default connection;
