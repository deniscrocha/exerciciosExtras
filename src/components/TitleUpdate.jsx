import { useState, useEffect } from "react";
import style from "../css/TitleUpdate.module.css";

function TitleUpdate() {
  const [title, setTitle] = useState(0);
  useEffect(() => {
    document.title = "Título: " + [title];
    return () => {};
  }, [title]);
  const handleClick = (operation) => {
    if (operation === "Increment") {
      const newValue = title + 1;
      setTitle(newValue);
    } else {
      const newValue = title - 1;
      setTitle(newValue);
    }
  };
  return (
    <div class={style.TitleDiv}>
      <h2>Atualização de Título</h2>
      <p>Counter: {title}</p>
      <div>
        <button onClick={() => handleClick("Increment")}>Increment</button>
        <button onClick={() => handleClick("Decrement")}>Decrement</button>
      </div>
    </div>
  );
}
export default TitleUpdate;
