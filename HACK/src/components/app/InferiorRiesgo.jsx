import React from 'react';
import styled from 'styled-components';

const InferiorRiesgo = () => {
  return (
    <Container>
      <div>
        <ImageContainer>
          <img src="https://www.elcomercio.com/wp-content/uploads/2022/08/4068431-scaled-e1660956957886-700x391.jpg" alt="img" />
        </ImageContainer>
        <div>
          <h3>Necesidad de intimidad y confidencialidad</h3>
          <p>En nuestra televeterinaria, comprendemos la importancia de la intimidad y la confidencialidad en el cuidado de tu mascota. Nos comprometemos a brindar un ambiente seguro y protegido para ti y tu mascota.</p>
        </div>
      </div>
      <div>
        <Card>
          <img src="https://www.elcomercio.com/wp-content/uploads/2022/08/4068431-scaled-e1660956957886-700x391.jpg" alt="img" />
          <label htmlFor="">Falta de conocimiento sobre la seguridad en línea</label>
        </Card>
        <Card>
          <img src="https://www.elcomercio.com/wp-content/uploads/2022/08/4068431-scaled-e1660956957886-700x391.jpg" alt="img" />
          <label htmlFor="">Necesidad de atención y cuidado personalizado</label>
        </Card>
      </div>
    </Container>
  );
};

export default InferiorRiesgo;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #225859;
  color: #ffffff;

  & > div:nth-child(1) {
    width: 100%;
    height: 80vh;
    margin-top: 40px;
    background: #069266;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;

    & img {
      width: 30vw;
      height: 40vh;
      border: solid 1px #ffffff;
      padding: 1em;
    }

    & div {
      width: 40%;
      text-align: center;
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    flex-wrap: wrap;
    padding: 2em;

    & > div {
      width: calc(90% / 3);
      background-color: #ffffff;
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2em;

      & img {
        width: 100%;
      }

      & label {
        width: 90%;
        margin: 0 auto;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 30vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: solid 1px #ffffff;
  border-radius: 8px;
`;

const Card = styled.div`
  width: calc(90% / 3);
  background-color: #6c9090;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  & img {
    width: 100%;
    border-radius: 8px;
  }

  & label {
    margin-top: 1em;
    text-align: center;
  }
`;
