import React from "react";
import axios from "axios";

//enviroment variables
// const URL = process.env.REACT_APP_API_URL;
// const KEY = process.env.REACT_APP_API_KEY;

export const getCity = async (city = "Vancouver") =>
  await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=44418cf99ffd49e3ae8175636222112&q=${city}&aqi=no`
  );
