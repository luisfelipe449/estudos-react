import React, { useState } from "react";

export default function Card() {
  const [randomNumber, setRandomNumber] = useState("Clique aqui");

function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    setRandomNumber(novoNumero);
  }

  const [show, setShow] = useState(false);
  
  function handleOnClick() {
    gerarNumero();
    setShow((prevCheck) => !prevCheck)}


  return (
    <div className="cards-container">
      <div className="cards">
        <button onClick={ handleOnClick}>{randomNumber}</button>
        {show ? (
            <p>Para gerar um número aleatório!</p> ) 
            : <p>Para gerar um número aleatório!</p> 
        }
    </div>
    </div>
  );
}
