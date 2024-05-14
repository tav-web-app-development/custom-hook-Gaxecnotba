import useTime from "./useTime";
import "./style.css";

export default function Clock() {
  const time = useTime();
  function clock(number) {
    return (number < 10 ? "0" : "") + number;
  }
  function formatTime() {
    let hour = time.getHours();
    const min = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${clock(hour)}:${clock(min)}:${clock(seconds)} ${meridiem}`;
  }
  return (
    <>
      <div className="container">
        <div className="contador">
          <p>{formatTime()} </p>
        </div>
      </div>
    </>
  );
}
