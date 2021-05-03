const sqlite3 = require("sqlite3")

// Connects to database
let db = new sqlite3.Database("./data.db")

// Creates tables if they does not exist
db.exec("CREATE TABLE IF NOT EXISTS users (user TEXT UNIQUE, passwd TEST)")
db.exec("CREATE TABLE IF NOT EXISTS times (user TEXT, cube TEST, time TEXT, scramble TEXT)")

// Returns all the data in times table
function getAllData(req, res) {
    var dataToSend = [];

    // Receives all the data from the times table
    db.all("SELECT * FROM times", (error, rows) => {
        // Inserts all the data in an array
        rows.forEach((row) => {
            dataToSend.push(row);
        })

        // Sends to client the array
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(dataToSend))
        res.end()
    })
}

exports.getAll = getAllData;