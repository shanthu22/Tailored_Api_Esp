//index.js
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const UXSRoutes = require("./api/userxservice/userxservice.router");

const app = express();
app.use("/esp", UXSRoutes);
//CORS
const allowedOrigins = [`http://localhost:${process.env.PORT}`];
const CorsOption = {
  origin: allowedOrigins,
  methods: "GET,HEAD,PUT",
  credentials: true,
};
app.use(cors(CorsOption));

//testing end point
app.get("/", (req, res) => {
  res.send("Works");
});

//listening on the given PORT
app.listen(process.env.PORT, () => {
  console.log(`Listening on Port: http://localhost:${process.env.PORT}`);
});
