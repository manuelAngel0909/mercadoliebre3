const express = require("express");
const app = express();
const port=process.env.port || 5035
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
app.listen(port, () => console.log("running on port 5035"));
