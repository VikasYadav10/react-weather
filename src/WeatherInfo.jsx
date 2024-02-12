import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { FaWind } from "react-icons/fa6";
import { FaWater } from "react-icons/fa6";

const key = "8e5be22a41c75105b6cf85c9179cabfd";

function WeatherInfo({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    const info = async () => {
      setLoading(true);
      const res = await fetch(url);
      // if (!res.ok) {
      //   setLoading(false);
      //   setError(true);
      //   throw new Error("City not found");
      // }
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    };
    info();
  }, [city]);

  let temp = 21;
  let humidity = 41;
  let speed = 4.44;
  let dir = "North";
  if (weather !== null) {
    temp = Math.round(weather.main.temp);
    humidity = weather.main.humidity;
    speed = weather.wind.speed;
    const deg = weather.wind.deg;
    dir = dirn(deg);
  }

  // if (error) {
  //   return <Error />;
  // }

  if (loading) {
    return <Loading />;
  }

  function dirn(deg) {
    if (deg === 0 || deg === 360) {
      return "North";
    }
    if (deg > 0 && deg < 90) {
      return "North-East";
    }
    if (deg === 90) {
      return "East";
    }
    if (deg > 90 && deg < 180) {
      return "South-East";
    }
    if (deg === 180) {
      return "South";
    }
    if (deg > 180 && deg < 270) {
      return "South-West";
    }
    if (deg === 270) {
      return "West";
    }
    if (deg > 270 && deg < 360) {
      return "North-West";
    }
  }
  return (
    <section>
      <div className="temp">{temp}&deg;c</div>
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
            <div>Wind Speed</div>
            <div>{dir}</div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default WeatherInfo;
