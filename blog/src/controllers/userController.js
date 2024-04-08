const router = require("express").Router();
const userService = require("../services/userService");

router.get("/login", (req, res) => {
    res.render("user/login");
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    res.redirect("/");
});

router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    const { name, email, password, repeatPassword } = req.body;
    await userService.register({ name, email, password, repeatPassword });
    res.redirect("/");
});

module.exports = router;