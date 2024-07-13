import { useState } from "react";
import style from "../css/ToggleText.module.css";

function ToggleText() {
  const [visibility, setVisibility] = useState(false);
  const handleClick = () => {
    if (visibility) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };
  return (
    <div className={style.ToggleDiv}>
      <h2>Mostrar ou Esconder Texto</h2>
      <button onClick={()=>{handleClick()}}>Mostrar OU Esconder Texto</button>
      <p>
        {visibility
          ? `Geralt de Rívia é um bruxo sagaz e habilidoso. Um assassino impiedoso e
        de sangue-frio treinado, desde a infância, para caçar e eliminar
        monstros. Seu único objetivo: destruir as criaturas do mal que assolam o
        mundo.` 
          : ""}
      </p>
    </div>
  );
}

export default ToggleText;
