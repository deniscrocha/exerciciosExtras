import style from "../css/RealTimeClock.module.css";
import { useState, useEffect } from "react";
function RealTimeClock() {
  const firstLoad = () => {
    const date = new Date();
    const obj = {};
    obj.hour = date.getHours();
    obj.minute = date.getMinutes();
    obj.second = date.getSeconds();
    return obj;
  };
  const [time, setTime] = useState(firstLoad());
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const obj = {};
      obj.hour = date.getHours();
      obj.minute = date.getMinutes();
      obj.second = date.getSeconds();
      setTime(obj);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return (
    <div className={style.RealTimeDiv}>
      <h2>Relógio em Tempo Real</h2>
      <div>
        <p name="Hora">{time.hour}</p>
        <p name="Minuto">{time.minute}</p>
        <p name="Segundo">{time.second}</p>
      </div>
    </div>
  );
}
export default RealTimeClock;
