import { useTime } from "../context/TimeContext";

export default function Main({ children }) {
  const { evening } = useTime();
  return <div className={`box ${evening ? "night" : "day"}`}>{children}</div>;
}
