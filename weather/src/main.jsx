import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { WeatherContextProvider } from "./Context/WeatherContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>
);
