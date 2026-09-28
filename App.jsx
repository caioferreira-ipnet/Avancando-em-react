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
import CarDetails from "./components/CarDetails.jsx";
import Fragment from "./components/Fragment.jsx";
import Container from "./components/Container.jsx";
//import de imagens
import Gato from "./assets/gatinho.jpg";

function App() {
  const cars = [
    { id: 1, brand: "Ford", model: "Ka", year: 2018, newCar: false },
    { id: 2, brand: "Fiat", model: "Uno", year: 2020, newCar: true },
    { id: 3, brand: "Chevrolet", model: "Onix", year: 2026, newCar: false },
    { id: 4, brand: "Honda", model: "Civic", year: 2018, newCar: false },
  ];
  return (
    <>
      <section id="center">
        <div>
          <img src="/shrek.jpg" alt="Foto do Shrek" />
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
        {/*
      <CarDetails brand="Fiat" model="Uno" year={2020} newCar={true} />
        <CarDetails brand="Chevrolet" model="Onix" year={2026} newCar={false} />
        <CarDetails brand="Honda" model="Civic" year={2018} newCar={false} />
      */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            model={car.model}
            year={car.year}
            newCar={car.newCar}
          />
        ))}
        <Fragment />
        <Container myValue="123">
          <p>Este é o conteúdo do container</p>
        </Container>
      </section>
    </>
  );
}

export default App;
