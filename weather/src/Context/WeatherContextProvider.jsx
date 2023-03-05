import { createContext, useState } from "react";
import { getCity } from "../API/weather.api";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [place, setPlace] = useState({
    city: "",
  });

  const [weather, setWeather] = useState([]);

  const handleChangeCity = async (city) => {
    const response = await getCity(city);
    setWeather(response.data);
  };

  console.log("weather", weather);

  return (
    <WeatherContext.Provider
      value={{ place, setPlace, handleChangeCity, weather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
