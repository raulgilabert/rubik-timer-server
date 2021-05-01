const get = require("./getData")

const express = require("express")
const app = express()
const port = 3000


app.get("/", get.get)

app.listen(port)