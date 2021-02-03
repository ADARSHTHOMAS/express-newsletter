const express = require("express");

const app = express();

app.get("/",function(req, res){
    res.send("<h1>Hello, BLACK SPYDER!,HOW IS THE WORLD OF NODE JS?? </h1>")
});

app.get("/about",function(req, res){
    res.send("<h2>I am Adarsh Thomas & love Chess</h2>");
});

app.get("/contact",function(req, res){
    res.send("<h2>mail me:adarshthomasv@gmail.com/sidsharmawe@gmail.com</h2>");
});

app.listen(3000,function(){
    console.log("SERVER IS STARTING ON PORT 3000");
});
