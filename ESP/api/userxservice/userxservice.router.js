const { GetUXS } = require("./userxservice.controller");
// Import the necessary modules
const express = require("express");
//const router = express.Router();
// Create a new router instance
const UXSRoute = express.Router();

UXSRoute.get("/", GetUXS);

module.exports = UXSRoute;
