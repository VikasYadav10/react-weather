import { useWeather } from "../context/WeatherContext";

export default function Error() {
  const { errorMessage } = useWeather();

  return <h3 className="error">⛔ {errorMessage.message}</h3>;
}
