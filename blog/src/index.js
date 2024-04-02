const express = require("express");
const path = require("path");
const { PORT } = require("./config");

// Init
const app = express();

// Express Configuration
app.use(express.static(path.resolve(__dirname, "./templates")));
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
    res.send("Hello home page");
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))