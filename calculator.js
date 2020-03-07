const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

//Use body parser with express
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));

app.post('/', function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});  

app.get('/bmicalculator', (req, res) => res.sendFile(__dirname + "/bmiCalculator.html"));

app.post('/bmicalculator', function(req, res){
    var numWeight = parseFloat(req.body.weight);
    var numHeight = parseFloat(req.body.height);

    var bmi = numWeight/(numHeight ** 2);

    res.send("Your BMI is " + bmi);
});  

app.listen(port, () => console.log(`Server is running on port ${port}`));