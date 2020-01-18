var  express = require("express");
var  app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    
    res.render("search");

});

app.get("/results", function(req, res){
    var str=req.query.result;
    var url="http://omdbapi.com/?s="+str+"&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data:data});
        }
    });
});


app.listen(3000 , function(){
    console.log("Movie App has started at http://localhost:3000");
});
