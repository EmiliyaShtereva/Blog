const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const { PORT } = require("./config");

// Init
const app = express();

// Express Configuration
app.use(express.static(path.resolve(__dirname, "./styles")));
app.use(express.urlencoded({ extended: false }));

//Handlebars Configuration
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views")

// Routes
app.get("/", (req, res) => {
    res.send("Hello home page");
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))