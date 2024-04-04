import React from "react";
import "./App.css";
import Time from "./components/Time";
import Layout from "./components/Layout";
import Main from "./components/Main";
import { WeatherProvider } from "./context/WeatherContext";
import { TimeProvider } from "./context/TimeContext";

function App() {
  return (
    <WeatherProvider>
      <TimeProvider>
        <Main>
          <Layout />
          <Time />
        </Main>
      </TimeProvider>
    </WeatherProvider>
  );
}

export default App;
