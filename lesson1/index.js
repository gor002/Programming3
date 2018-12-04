var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello world</h1>");
});

app.get("/google", function (req, res) {
    res.redirect('https://google.com');
});

app.get("/search/:value", function (req, res) {
    var value = req.params.value;
    res.redirect('https://google.com/search?q=' + req.params.value);
});

app.get("/name/:anun", function (req, res) {
    var name = req.params.anun;
    res.send("<h1>Hello " + name + "</h1>");
});
app.get("/*", function (req, res) {
    res.send("<h1>404 Error</h1>");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});
