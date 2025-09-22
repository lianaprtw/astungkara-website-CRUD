const express = require("express");
const databaseConnection = require("./database")

// database connection
databaseConnection();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from Backend!");
});

app.listen(8000, () => {
    console.log("Port listening on port 8000");
});