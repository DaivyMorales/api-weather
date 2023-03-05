import { useContext, useState } from "react";
import { WeatherContext } from "../Context/WeatherContextProvider";
import {
  TiWaves,
  TiWeatherWindy,
  TiAdjustBrightness,
  TiArrowUp,
} from "react-icons/ti";

export const PlaceInformation = () => {
  const { weather, send } = useContext(WeatherContext);

  const fecha = new Date();
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fechaFormateada = fecha.toLocaleDateString("en-EN", opciones);

  return (
    <>
      <div className=" text-purple-500 flex flex-col gap-y-2 justify-center items-center p-8 rounded-xl ">
        <img src={weather?.current?.condition.icon} alt="" width="60" />
        <h2 className="font-bold text-purple-500">
          {weather?.current?.condition?.text}
        </h2>
        <p className=" text-purple-500 text-xs">{fechaFormateada}</p>
        <h2 className="font-bold text-4xl text-purple-500">
          {weather?.current?.temp_c}°
        </h2>
        <div className="grid grid-cols-2  gap-2 p-2  border-purple-200 border-2 rounded-xl">
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-purple-500 text-xs font-bold">UV</h2>
            <div className="flex items-center">
              <TiAdjustBrightness size={28} />
              <h2 className="text-purple-500 text-xs font-bold">
                {weather?.current?.uv}
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-purple-500 text-xs font-bold">LATITUDE</h2>
            <div className="flex items-center">
              <TiArrowUp size={28} />
              <h2 className="text-purple-500 text-xs font-bold">
                {weather?.location?.lat}
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-purple-500 text-xs font-bold">WIND</h2>
            <div className="flex items-center">
              <TiWaves size={28} />
              <h2 className="text-purple-500 text-xs font-bold">
                {weather?.current?.wind_kph}
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-purple-500 text-xs font-bold">HIMIDITY</h2>
            <div className="flex items-center">
              <TiWeatherWindy size={28} />
              <h2 className="text-purple-500 text-xs font-bold">
                {weather?.current?.humidity}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
