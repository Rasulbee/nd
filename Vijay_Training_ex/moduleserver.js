var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/step52-using-modules.html")
})
app.listen(1010);
console.log("server is now live");