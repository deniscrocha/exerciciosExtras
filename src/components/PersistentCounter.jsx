import style from "../css/PersistentCounter.module.css";
import { useState, useEffect } from "react";
function PersistentCounter() {
  const initialCounter = localStorage.getItem("counter")
    ? parseInt(localStorage.getItem("counter"))
    : 0;
  const biggestCounter = localStorage.getItem("big")
    ? parseInt(localStorage.getItem("big"))
    : 0;
  const smallestCounter = localStorage.getItem("small")
    ? parseInt(localStorage.getItem("small"))
    : 0;
  const [counter, setCounter] = useState(initialCounter);
  const [biggestValue, setBiggest] = useState(biggestCounter);
  const [smallestValue, setSmallest] = useState(smallestCounter);
  useEffect(() => {
    localStorage.setItem("counter", counter);
    if (counter > biggestValue) {
      setBiggest(counter);
      localStorage.setItem("big", counter);
    }
    if (counter < smallestValue) {
      setSmallest(counter);
      localStorage.setItem("small", counter);
    }
  }, [counter]);
  const handleHardReset = () => {
    setCounter(0);
    localStorage.setItem("counter", counter);
    setBiggest(counter);
    localStorage.setItem("big", counter);
    setSmallest(counter);
    localStorage.setItem("small", counter);
  };
  return (
    <div className={style.PersistentDiv}>
      <h2>Sincronização de Estado Com Local Storage</h2>
      <p>Contador: {counter}</p>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
        <button onClick={() => setCounter(0)}>Resetar Contador</button>
      </div>
      <div>
        <div>Menor Valor: {biggestValue}</div>
        <div>Maior Valor: {smallestValue}</div>
      </div>
      <button onClick={() => handleHardReset()}>Resetar Placar</button>
    </div>
  );
}
export default PersistentCounter;
