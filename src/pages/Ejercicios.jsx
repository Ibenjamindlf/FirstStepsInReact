import { MyButton } from "../ejercicios/Ejercicio1";
import { InformacionPagina } from "../ejercicios/Ejercicio2";
import { Perfil } from "../ejercicios/Ejercicio3";
import '../App.css'
import { JugadoresFutbol } from "../ejercicios/Ejercicio4";
import { useState } from 'react';
import { BotonContador } from "../ejercicios/Ejercicio5";
import { BotonContadorActivo } from "../ejercicios/Ejercicio6";

export function Ejercicios() {
  const [contadorActivo, setContadorActivo] = useState(0);

  function sumClick() {
    setContadorActivo(contadorActivo + 1);
  }
  return (
    <>
      <h1>Tutorial react</h1>
      {/* "Ejercicio 1" */}
      <MyButton />
      <br />
      {/* "Ejercicio2" */}
      <InformacionPagina />
      <br />
      {/* "Ejercicio 3" */}
      <Perfil />
      <br />
      {/* "Ejercicio4" */}
      <JugadoresFutbol />
      <br />
      {/* "Ejercicio5" */}
      <BotonContador />
      <BotonContador />
      <br />
      <br />
      {/* "Ejercicio6"     */}
      <BotonContadorActivo 
        contador={contadorActivo}
        onClick={sumClick}
      />
      <BotonContadorActivo 
        contador={contadorActivo}
        onClick={sumClick}
      />
    </>
  );
}