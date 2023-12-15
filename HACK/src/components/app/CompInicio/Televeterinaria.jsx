import React from 'react';
import styled from "styled-components";

const Televeterinaria = () => {
  return (
    <DivTeleveterinaria>
      <div>
        <h1>AnimTech: Cuidando a tus mascotas a distancia</h1>
        <p>AnimTech es un sistema innovador que brinda atención veterinaria en línea para perros y gatos. Nuestro objetivo es asegurar que tus mascotas reciban la mejor atención sin tener que salir de casa.</p>
      </div>
      <section>
        <h4>Fases de AnimTech</h4>
        <div>
          <h5>Consulta Virtual</h5>
          <p>Realiza consultas virtuales con veterinarios expertos desde la comodidad de tu hogar. Obtén diagnósticos, recomendaciones y consejos de cuidado para tu mascota.</p>
        </div>
        <div>
          <h5>Seguimiento Personalizado</h5>
          <p>Nuestros veterinarios realizarán un seguimiento personalizado de la salud de tu mascota. Ajustaremos los tratamientos según sea necesario y te brindaremos atención continua.</p>
        </div>
        <div>
          <h5>Entrega de Medicamentos y Productos</h5>
          <p>Accede a una amplia variedad de medicamentos, alimentos y productos para el cuidado de tu mascota. Realizamos entregas rápidas y seguras directamente en tu domicilio.</p>
        </div>
        <div>
          <h5>Emergencias y Atención Especializada</h5>
          <p>Estamos disponibles las 24 horas para atender emergencias veterinarias y proporcionar atención especializada. La salud y bienestar de tu mascota son nuestra máxima prioridad.</p>
        </div>
      </section>
    </DivTeleveterinaria>
  )
}

export default Televeterinaria;

const DivTeleveterinaria = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 2em 0;
  background-color: #f2f2f2;
  & > div {
    width: 80%;
    margin: 0 auto;

    & h1 {
      font-size: 1.8em;
      color: #225859;
      margin-bottom: 1em;
    }

    & p {
      color: #333;
      line-height: 1.6;
    }
  }

  & > section {
    width: 80%;
    margin: 0 auto;
    gap: 2em;

    & h4 {
      font-size: 1.4em;
      color: #225859;
      margin: 2em 0;
    }

    & > div {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 2em;
      color: #333;
      &:hover{
  box-shadow:0 2px 5px #0005;
}
      & h5 {
        font-size: 1.2em;
        color: #225859;
        margin-bottom: 1em;
        border-left:solid .5em#225859;
        padding:0 1em;
      }

      & p {
        line-height: 1.4;
      }
    }

    display: flex;
    flex-direction: column;
  }
`;
