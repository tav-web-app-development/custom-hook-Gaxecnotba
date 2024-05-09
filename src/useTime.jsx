import { useEffect, useState, useRef } from "react";

export default function useTime() {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return time;
}
