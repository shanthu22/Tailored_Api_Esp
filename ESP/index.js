console.log("aaaa");
require("dotenv").config();
const express = require("express");
console.log(process.env.DB_HOST);

const app = express();
const UXSRoutes = require("./api/userxservice/userxservice.router");
app.use("/esp", UXSRoutes);
app.get("/", (req, res) => {
  res.send("it works boss ");
});
app.listen(process.env.PORT, () => {
  console.log(`Listening on Port: http://localhost:${process.env.PORT}`);
});
