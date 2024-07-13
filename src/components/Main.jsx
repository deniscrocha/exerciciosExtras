import style from "../css/Main.module.css";
import { useState } from "react";
function Main() {
  const [actualExerc, setActualExerc] = useState(1);
  const handleClick = (number) => {
    setActualExerc(number);
  };
  const renderExer = (exerc) =>{
    switch(exerc){
      case 1:
        return(<h1>Exercicio 01</h1>)
      case 2:
        return(<h1>Exercicio 02</h1>)
      case 3:
        return(<h1>Exercicio 03</h1>)
      case 4:
        return(<h1>Exercicio 04</h1>)
      case 5:
        return(<h1>Exercicio 05</h1>)
      case 6:
        return(<h1>Exercicio 06</h1>)
    }
  }
  return (
    <main className={style.MainClass}>
      <section className={style.selectSection}>
        <h3> Escolha o Exercício</h3>
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
        {renderExer(actualExerc)}
      </section>
    </main>
  );
}
export default Main;
