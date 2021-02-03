const express = require("express");
 const bodyParser = require("body-parser");

const app = express();
// app.urlencoded({encoded:true});
// app.json();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));

// __dirname=path.resolve(path.dirname(' '));


app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
    

});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    // var num1 = Number(req.num1);
    // var num2 = Number(req.num2);
    var result = num1+num2;
    res.send("The result of the Calculation is "+ result);
});

console.log("changes in nodemon have occured");

app.listen(3000,function(req,res){
    console.log("Server of Calc is running on port 3000");
    
     
});