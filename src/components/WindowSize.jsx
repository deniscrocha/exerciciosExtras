import style from "../css/WindowSize.module.css";
import { useState, useEffect } from "react";
function WindowSize() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setSize(window.innerWidth);
    };
  }, [size]);
  return (
    <div className={style.WindowDiv}>
      <h2>Monitoramento de Largura da Janela</h2>
      <p>Largura Atual: {size}</p>
    </div>
  );
}

export default WindowSize;
