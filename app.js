const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/register", function (req,res){
  res.sendFile(__dirname + "/views/register.html")
});
app.get("/login", function (req,res){
  res.sendFile(__dirname + "/views/login.html")
});
app.listen(5035, () => console.log("running on port 5035"));
