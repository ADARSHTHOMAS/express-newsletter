const { Console } = require("console");
const express = require("express");
const https = require("https");
// const bodyParser = require("body-parser");

const app=express();
app.use(express.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname +  "/indexWeather.html");
    
});

app.post("/",function(req, res){
    // Testing method for post of html file
    // console.log("post recieved");

    // Testing method for CITY'S NAME
    // console.log(req.body.cityName);
    
    var query=req.body.cityName;
    var appid="4a02fe6c07b5cc9ef16d5de4f1f646da";
    const url= "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appid +"&units=metric"
    
    https.get(url,function(response){
        console.log(response.statusCode)
        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            // console.log(weatherData);
            const city=weatherData.name
            const weatherDescription=weatherData.weather[0].description
            const temp=weatherData.main.temp
            const temp_feelslike=weatherData.main.feels_like
            const icon = weatherData.weather[0].icon
            const iconUrl="http://openweathermap.org/img/wn/" + icon + "@4x.png"
            res.write("<p>weather looks like " + weatherDescription +" </p>");
            res.write("<h1>temperature in "+city+" is "+ temp +" </h1>");
            res.write("<p>Temperature in "+city+" feels like "+temp_feelslike + " </p>");
            res.write("<img src=" + iconUrl + ">");
            res.send()
        })
    })
})
 
app.listen(3000,function(req, res){
    console.log("Server is running for WeatherAPI on port 3000");
});