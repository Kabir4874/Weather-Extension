import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import WeatherCard from "./weatherCard";
import 'fontsource-roboto'
const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="Toronto" />
      <WeatherCard city="New York" />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
