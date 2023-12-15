import React from 'react';
import styled from 'styled-components';

const Cars = () => {
  return (
    <>
      <Cars1>
        <Title>
          <h2>EL VALOR DE LA SENSIBILIZACIÓN POR LOS ANIMALES!!</h2> 
        </Title>
        <LongText>
          Adoptar un perro con responsabilidad y compromiso es una estupenda opción cuando hay niños en casa. De esta manera, aprovecharemos para enseñar a los pequeños, de primera mano, las consecuencias del abandono de animales. Algunas pautas que ayudan a que la familia con niños adopte con éxito son: explicar al niño en qué consiste la adopción, acudir toda la familia al albergue para adoptar al perro, implicar a los niños en el proceso de elección del animal y, una vez que el perro está en casa, educar al can entre todos.
          Muchos padres tienen hijos a quienes les gustan los animales y que desean, además, tener un perro en casa. Los pequeños pueden llegar a ser muy insistentes cuando quieren algo, pero hay que hacerles entender que tener un animal no es un capricho, sino que implica grandes sacrificios y muchas responsabilidades. A continuación, se explican varias pautas para una familia con niños que decide adoptar un perro.
          De esta forma se forman valores positivos en la familia.
          Los Valores son muy importantes en la vida de las personas ya que suelen mover la conducta y el comportamiento de las personas; orientan la vida y marcan la personalidad.
          Televeterinaria es un sistema que beneficia a los perros y gatos, proporcionando servicios veterinarios a domicilio y promoviendo el cuidado responsable de las mascotas.
        </LongText>
        <section>
          <iframe src="https://youtu.be/IRvn-is9xjo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
      </Cars1>
    </>
  )
}

export default Cars;

const Cars1 = styled.div`
  width: 100%;
  background-color: #6c9090;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#225859;
  flex-direction:column;
  gap:2em;
  & section {
    width:70%;
    height:60vh;
    margin:1em auto;
    background-color:#069266;
    color:#000000;
    & iframe {
      width:100%;
      height:100%;
    }
  }
`;

const Title = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LongText = styled.p`
  width: 80%;
  text-align: center;
  color: #ffff;
  margin: 0 auto;
`;
