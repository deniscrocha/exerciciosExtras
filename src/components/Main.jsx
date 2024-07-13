import style from "../css/Main.module.css";
import { useState, useEffect } from "react";
import TitleUpdate from "./TitleUpdate.jsx";
import WindowSize from "./WindowSize.jsx";
import PersistentCounter from "./PersistentCounter.jsx";
import RealTimeClock from "./RealTimeClock.jsx";
import ToggleText from "./ToggleText.jsx";
import LimitedCounter from "./LimitedCounter.jsx";

function Main() {
  const [actualExerc, setActualExerc] = useState(1);
  const handleClick = (number) => {
    setActualExerc(number);
  };
  const switchExerc = (()=>{
    switch (actualExerc) {
      case 1:
        return (
          <TitleUpdate />
        )
      case 2:
        return (
          <WindowSize />
        )
      case 3:
        return (
          <PersistentCounter />
        )
      case 4:
        return (
          <RealTimeClock />
        )
      case 5:
        return (
          <ToggleText />
        )
      case 6:
        return (
          <LimitedCounter />
        )
    }
  })
  useEffect(()=>{
    if(actualExerc !== 1){
      document.title = "Atividades Extras";
    }
  }, [actualExerc])
  return (
    <main className={style.MainClass}>
      <section className={style.selectSection}>
        <h2> Escolha o Exercício</h2>
        <div>
          <button
            name="Button1"
            className={actualExerc === 1 ? style.SelectedButton : ""}
            onClick={() => handleClick(1)}
          >
            Atualização de Título com useEffect
          </button>
          <button
            className={actualExerc === 2 ? style.SelectedButton : ""}
            name="Button2"
            onClick={() => handleClick(2)}
          >
            Monitoramento de Largura da Janela
          </button>
          <button
            className={actualExerc === 3 ? style.SelectedButton : ""}
            name="Button3"
            onClick={() => handleClick(3)}
          >
            Sincronização de Estado com Local Storage
          </button>
          <button
            className={actualExerc === 4 ? style.SelectedButton : ""}
            name="Button4"
            onClick={() => handleClick(4)}
          >
            Relógio em Tempo Real
          </button>
          <button
            className={actualExerc === 5 ? style.SelectedButton : ""}
            name="Button5"
            onClick={() => handleClick(5)}
          >
            Exibir/Mostrar Texto
          </button>
          <button
            className={actualExerc === 6 ? style.SelectedButton : ""}
            name="Button6"
            onClick={() => handleClick(6)}
          >
            Contador com Limite
          </button>
        </div>
      </section>
      <section className={style.exercSection}>
        {switchExerc()}
      </section>
    </main>
  );
}
export default Main;
