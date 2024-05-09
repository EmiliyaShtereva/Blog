const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const routes = require("./router");
const { PORT, DB_URL } = require("./config");

// Init
const app = express();

// Express Configuration
app.use(express.static(path.resolve(__dirname, "./styles")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser);

//Handlebars Configuration
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

//Database Connection
async function dbConnect() {
    await mongoose.connect(DB_URL);
}

dbConnect()
    .then(() => {
        console.log("Succesfully connected to the DB!");
    })
    .catch((err) => {
        console.log(`Error while connecting to the DB. Error: ${err}`);
    });

// Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))