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
        // Only views the information if the data received from the database is not undefined
        if (typeof rows != "undefined") {
            // Inserts all the data in an array
            rows.forEach((row) => {
                dataToSend.push(row);
            })
        }

        // Sends to client the array
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(dataToSend))
        res.end()
    })
}

// Returns all the data in times table where the cube is the requested one
function getTimesCube(req, res) {
    var dataToSend = [];
    var cube = req.query.cube;

    // Receives all the data from the times table where the cube is the requested one
    db.all("SELECT * FROM times WHERE cube=?", cube, (error, rows) => {
        // Only views the information if the data received from the database is not undefined
        if (typeof rows != "undefined") {
            // Inserts all the data in an array
            rows.forEach((row) => {
                dataToSend.push(row);
            })
        }

        // Sends to client the array
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(dataToSend))
        res.end()
    })
}

function setTime(req, res) {
    var user = req.query.user;
    var cube = req.query.cube;
    var time = req.query.time;
    var scramble = req.query.scramble;

    db.run("INSERT INTO times VALUES(?, ?, ?, ?)", [user, cube, time, scramble], (error) => {
        if (error != null) {
            res.send("OK")
            res.end()
        }
        else {
            res.sendStatus(500)
            res.end()
        }
    })
}

exports.getAll = getAllData;
exports.getCube = getTimesCube;
exports.insertData = setTime;