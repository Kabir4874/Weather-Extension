import "fontsource-roboto";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import WeatherCard from "./weatherCard";
const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([
    "Toronto",
    "New York",
    "Error",
  ]);
  return (
    <div>
      {cities.map((city, index) => (
        <WeatherCard city={city} key={index} />
      ))}
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
