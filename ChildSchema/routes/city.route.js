const { Router } = require("express");
const { getCity, addCity } = require("../controllers/city.controller");

const cityRouter = Router();

cityRouter.get("/getCity", getCity);

cityRouter.post("/addcity", addCity);

module.exports = cityRouter;
