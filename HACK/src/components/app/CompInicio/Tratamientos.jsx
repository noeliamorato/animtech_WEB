import React from "react";
import styled from "styled-components";
import image from '../../img/img4ellos.png';

const Tratamientos = () => {
  return (
    <Tratamientoss>
      <div>
        <h2>¿Qué es Televeterinaria?</h2>
        <p>
          "Televeterinaria" es un término que se utiliza para describir la prestación de servicios veterinarios a través de medios de comunicación a distancia, como la telefonía, la videoconferencia o la mensajería en línea. En lugar de requerir la presencia física del animal y del veterinario en el mismo lugar, la televeterinaria permite la consulta y el diagnóstico remotos.
        </p>
        <button>Más información</button>
      </div>
      <div>
        <img src={image} alt="Televeterinaria" />
      </div>
    </Tratamientoss>
  );
}

export default Tratamientos;

const Tratamientoss = styled.section`
  width: 90%;
  margin: 2em auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2em;
    background-color: #6c9090;
    border-radius: 0.5em;

    &:first-child {
      background-color: #225859;
      color: #ffffff;
    }

    & h2 {
      font-size: 2em;
      margin-bottom: 1em;
    }

    & p {
      font-size: 1.2em;
      margin-bottom: 1em;
      color: #555555;
    }

    & button {
      background-color: #069266;
      padding: 0.8em 2em;
      border: none;
      border-radius: 0.5em;
      color: #ffffff;
      font-size: 1.2em;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #225859;
      }
    }
  }

  & > div:last-child {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 100%;
      max-width: 400px;
      border-radius: 0.5em;
    }
  }
`