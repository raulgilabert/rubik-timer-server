const mysql = require("mysql")

var conn = mysql.createConnection({
    host: "raulgilabert.ddns.net:3306",
    user: "rubik",
    password: "Nyaaa",
})

conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected without errors");
    }
)

function get(req, res) {
    console.log("Nyaaa~~~")
}

exports.get = get;