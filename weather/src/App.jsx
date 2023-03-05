import "./Styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Weather } from "./Components/Weather";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
