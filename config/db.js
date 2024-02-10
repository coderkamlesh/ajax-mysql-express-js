const mysql = require("mysql");
// MySQL Connection Configuration

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ajax",
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

module.exports = db;