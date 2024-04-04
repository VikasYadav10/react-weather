import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();
const KEY = "";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

function WeatherProvider({ children }) {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("Ajmer");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(
    function () {
      async function fetchWeather() {
        try {
          setLoading(true);
          setError(false);
          const res = await fetch(
            `${BASE_URL}${city}&units=metric&appid=${KEY}`
          );
          const data = await res.json();
          if (Number(data.cod) === 404) {
            throw new Error(data.message);
          }
          setWeather(data);
        } catch (err) {
          setError(true);
          setErrorMessage(err);
        } finally {
          setLoading(false);
        }
      }
      fetchWeather();
    },
    [city]
  );

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
    <WeatherContext.Provider
      value={{
        value,
        city,
        error,
        loading,
        weather,
        setValue,
        setCity,
        errorMessage,
        dirn,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  return context;
}

export { useWeather, WeatherProvider };
