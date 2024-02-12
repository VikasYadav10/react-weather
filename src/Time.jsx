import React, { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const day = addZero(today.getDate());
  const week = today.getDay();

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
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <section className="time">
      <div>{time}</div>
      <div>{weeks[week]}</div>
      <div>{todaysDate}</div>
    </section>
  );
}

export default Time;
