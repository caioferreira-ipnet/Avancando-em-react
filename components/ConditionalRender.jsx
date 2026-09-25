import React from "react";
import { useState, setName } from "react";
const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Joana");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {!x && <p> Se x for false, sim!</p>}

      <div>
        {name === "Caio" ? <p>O nome é {name}</p> : <p>Nome não encontrado</p>}
      </div>
      <button onClick={() => setName("Caio")}>Clique aqui</button>
    </div>
  );
};

export default ConditionalRender;
