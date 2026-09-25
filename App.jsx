import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
//import dos componentes
import ManagerData from "./components/ManagerData.jsx";
import ListRender from "./components/ListRender.jsx";
import ConditionalRender from "./components/ConditionalRender.jsx";
import ShowUserName from "./components/ShowUserName.jsx";
//import de imagens
import Gato from "./assets/gatinho.jpg";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <img src="./public/shrek.jpg" alt="Foto do Shrek" />
        </div>
        <img src={Gato} alt="" />
        <div>
          <ManagerData />
        </div>
        <div>
          <ListRender />
        </div>
        <ConditionalRender />
        <ShowUserName name="Caio" />
      </section>
    </>
  );
}

export default App;
