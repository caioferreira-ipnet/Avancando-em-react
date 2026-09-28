import React from "react";

const CarDetails = ({ brand, model, year, newCar }) => {
  return (
    <div>
      CarDetails
      <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {model}</li>
        <li>Ano: {year}</li>
        <p>{newCar ? "Novo" : "Usado"}</p>
      </ul>
    </div>
  );
};

export default CarDetails;
