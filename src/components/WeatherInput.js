import React from "react";
import { useWeather } from "../context/WeatherContext";

export default function WeatherData() {
  const { value, setValue, setCity } = useWeather();

  function handleSubmit(e) {
    e.preventDefault();
    setCity(value);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
    </form>
  );
}
