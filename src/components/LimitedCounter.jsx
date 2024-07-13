import style from "../css/LimitedCounter.module.css";
import { useState, useEffect } from "react";
function LimitedCounter() {
  const [counter, setCounter] = useState(0);
  const [limit, setLimit] = useState(0);
  const [err, setErr] = useState({});
  useEffect(() => {
    setCounter(0);
    if (isNaN(parseInt(limit))) {
      setErr({ ...err, limitErr: true });
    } else {
      setErr({ ...err, limitErr: false });
    }
  }, [limit]);
  useEffect(() => {
    if (counter < limit) {
      setErr({ ...err, limitCount: false });
    } else {
      setErr({ ...err, limitCount: true });
      setCounter(parseInt(limit));
    }
  }, [counter]);
  return (
    <div className={style.LimitedDiv}>
      <h2>Contador com Limite</h2>
      <label>
        Defina o Limite:
        <input
          type="text"
          placeholder="Limite"
          onChange={(event) => {
            setLimit(event.target.value);
          }}
        />
        <p>{err.limitErr ? "Limite não Aceito, escreva números!" : ""}</p>
      </label>
      <p>Counter: {counter}</p>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
        <button onClick={() => setCounter(0)}>Resetar</button>
      </div>
      <p>{err.limitCount ? "Você chegou no Limite!" : ""}</p>
    </div>
  );
}
export default LimitedCounter;
