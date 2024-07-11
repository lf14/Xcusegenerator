/* eslint-disable */
import "./styles.css";

window.onload = function() {
  //write your code here
  const quien = [
    "Mi perro",
    "Mi aspiradora robot",
    "Un amigo distraído",
    "Una falla en la matrix",
    "Un ataque de amnesia colectiva",
    "Una invasión alienígena",
    "Un error en la simulación"
  ];
  const Hizo = [
    "se comió",
    "rompió",
    "escondió",
    "olvidó",
    "tomó prestado sin permiso",
    "desactivó temporalmente",
    "reprogramó",
    "alteró"
  ];
  const objetoAfectado = [
    "mi tarea",
    "mi teléfono",
    "las llaves del auto",
    "mi billetera",
    "mi proyecto"
  ];

  function generarExcusa() {
    const randomquien = quien[Math.floor(Math.random() * quien.length)];
    const randomHizo = Hizo[Math.floor(Math.random() * Hizo.length)];
    const randomobjetoAfectado =
      objetoAfectado[Math.floor(Math.random() * objetoAfectado.length)];
    const excuse = `${randomquien} ${randomHizo} ${randomobjetoAfectado}.`;
    document.getElementById("excuse").innerHTML = excuse;
  }
  generarExcusa();
};
