const db = require("./dbInteraction")

const express = require("express")
const app = express()
const port = 3000


app.get("/get", db.getAll);
app.get("/getCube", db.getCube);
app.get("/setTime", db.insertData)

app.listen(port)