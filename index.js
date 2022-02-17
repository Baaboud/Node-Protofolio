const EXPRESS = require("express");    //
const APP = EXPRESS();
const PORT = process.env.PORT || 5000; //Use PORT of Heroku or 5000

APP.set("view engine", "ejs");
APP.set('views', 'public');
console.log("server strtaed");

APP.use(EXPRESS.static('public'));
APP.get("/", (req, res) => {
    res.render("index", {title: "Baaboud"});
});

APP.listen(PORT);