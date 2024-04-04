import { useTime } from "../context/TimeContext";

function Time() {
  const { time, currWeek, todaysDate, evening } = useTime();

  return (
    <section className={`time ${evening ? "night-time" : ""}`}>
      <div>{time}</div>
      <div>{currWeek}</div>
      <div>{todaysDate}</div>
    </section>
  );
}

export default Time;
