import React, { useState } from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import Time from "./Time";

function App() {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("Ajmer");

  // const key = "8e5be22a41c75105b6cf85c9179cabfd";

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(value);
  };

  return (
    <article className="box">
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </form>
        <img src="/1975143.png" alt="sun" className="rotate" />
        <WeatherInfo city={city} />
      </div>
      <Time />
    </article>
  );
}

export default App;
