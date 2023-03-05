import { WeatherForm } from "./WeatherForm";
import { PlaceInformation } from "./PlaceInformation";
import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContextProvider";
import Footer from "./Information/Footer";
import { TiArrowLeft } from "react-icons/ti";

import { Link } from 'react-router-dom';

export const Weather = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="mt-10 w-screen  flex flex-col items-center gap-y-4">
      <div className="container mx-auto flex justify-start items-center px-5">
        <Link to="/">
          <TiArrowLeft size="50" color="gray" />
        </Link>
        <h2 className="text-purple-500 font-black">
          {weather?.location?.name},
          <span className="font-medium">{weather?.location?.country}</span>
        </h2>
      </div>
      <PlaceInformation />
      <WeatherForm />
      <Footer />
    </div>
  );
};
