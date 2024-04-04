import React from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherInput from "./WeatherInput";
import Image from "./Image";
import Error from "./Error";
import { useWeather } from "../context/WeatherContext";

export default function Layout() {
  const { error } = useWeather();

  return (
    <div className="container">
      <WeatherInput />
      {error ? (
        <Error />
      ) : (
        <>
          <Image />
          <WeatherInfo />
        </>
      )}
    </div>
  );
}
