import { createContext, useContext, useEffect, useState } from "react";

const TimeContext = createContext();

function TimeProvider({ children }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const day = addZero(today.getDate());
  const week = today.getDay();
  const hour = today.getHours();
  const evening = hour > 19 && hour < 7;
  

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function addZero(num) {
    return num > 10 ? num : `0${num}`;
  }

  const todaysDate = `${day} ${months[month]} ${year}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);

  const currWeek = weeks[week];

  return (
    <TimeContext.Provider value={{ time, currWeek, todaysDate, evening }}>
      {children}
    </TimeContext.Provider>
  );
}

function useTime() {
  const context = useContext(TimeContext);
  return context;
}

export { useTime, TimeProvider };
