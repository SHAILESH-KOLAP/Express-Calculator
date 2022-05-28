const express = require("express");
// Bodyparser allow us to parse data getting from post request
const bodyParser = require("body-parser");

const app = express();
// Bodyparser is work with express app
// BodyParser have few modes bodyParser.text() - get data in text format, bodyParser.json() - get data in json format, bodyParser.urlencoded() - get data that is sent from html form
// .urlencoded is used for getting data from post request
// extended: true allow us to view nested object
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);
  res.send(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
