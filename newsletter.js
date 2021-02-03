const { response } = require("express");
const express= require("express");
const https= require("https");

 
const app=express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname +"/indexNewsLetterSignup.html");
    console.log("I have send the file");
    
});

app.post("/",function(req, res){
    var FirstName=req.body.FirstName;
    var LastName=req.body.LastName;
    var email=req.body.email;
    // TESTING METHOD FOR POST REQUEST MADE ON OUR HTML PAGE
    console.log(FirstName+LastName, email);
    
    var data = {
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: FirstName,
                LNAME: LastName 


            }
        }
    ]
 };
 var jsonData = JSON.stringify(data);

 var apiKey="0b615a828b2537942dd8c148a67202a1-us7";
 var url="https://us7.api.mailchimp.com/3.0/lists/";
 var list_id="1031134af0";

 var resultUrl=url+list_id;
 
 var options = {
     method: "POST",
     auth: "adarsh:"+apiKey
 }

 var request=https.request(resultUrl, options, function(response) {
    if (response.statusCode === 200){
                res.sendFile(__dirname+"/indexNewsLetterSuccess.html")
            }
            else{
                res.sendFile(__dirname+"/indexNewsLetterFailure.html")
            } 
     response.on("data", function(data){
         console.log(JSON.parse(data));
     })
    })
    request.write(jsonData);
    request.end();
});

app.post("/Error",function(req, res){
    res.redirect("/");
})



app.listen(process.env.PORT || 3000,function(req ,res){
    console.log("Server for NewLetter is running on port 3000");

});
 