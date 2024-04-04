import React from "react";
import Loading from "./Loading";
import { FaWind } from "react-icons/fa6";
import { FaWater } from "react-icons/fa6";
import { useWeather } from "../context/WeatherContext";

function WeatherInfo() {
  const { city, weather, loading, dirn } = useWeather();

  if (loading) {
    return <Loading />;
  }

  const temp = Math.round(weather.main.temp);
  const humidity = weather.main.humidity;
  const speed = weather.wind.speed;
  const deg = weather.wind.deg;
  const dir = dirn(deg);

  return (
    <section>
      <div className="temp">{temp}&deg;</div>
      <h3>{city}</h3>
      <article className="info">
        <div className="elements">
          <FaWater className="water" />
          <div className="waterinfo">
            <div>{humidity}%</div>
            <div>Humidity</div>
          </div>
        </div>
        <div className="elements">
          <FaWind className="wind" />
          <div className="windinfo">
            <div>{speed}km/h</div>
            <div>{dir}</div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default WeatherInfo;
