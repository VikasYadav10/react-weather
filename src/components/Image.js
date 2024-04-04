import { useTime } from "../context/TimeContext";

export default function Image() {
  const { evening } = useTime();

  return <>{evening ? <Evening /> : <Morining />}</>;
}

function Morining() {
  return <img src="/sun.png" alt="sun" className="sun" />;
}

function Evening() {
  return <img src="/moon.gif" alt="moon" className="moon" />;
}
