const express = require("express");
const databaseConnection = require("./database")
const guestRouter = require("./routes/guest.routes");

// database connection
databaseConnection();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World from Backend!");
});

app.use('/guest', guestRouter);

app.listen(8000, () => {
    console.log("Port listening on port 8000");
});