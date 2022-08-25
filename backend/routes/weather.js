const express = require("express");
const weatherRouter = express.Router();
const weatherData = require("../data/weather.json");
// require("/weather.css");

weatherRouter.get("/", (req, res) => {
  // let {searchQuery} = req.query;

  let cityName = req.query.cityName;
  // let lon = req.query.lon;
  // let lat = req.query.lat;
  // console.log(`City: ${cityName}, Longitude:${lon}, Latitude:${lat}`)

  const city = weatherData.find(
    (city) => city.city_name.toLowerCase() === cityName.toLowerCase()
  );
  // res.send(city);

  try {
    const weatherArray = city.data.map((day) => new Forecast(day));

    res.status(200).send(weatherArray); //send back weather data
  } catch (error) {
    res.send('error');
  }
}); // end of GET

class Forecast {
  constructor(day) {
    (this.date = day.valid_date), (this.description = day.weather.description);
  }
}

module.exports = weatherRouter;
