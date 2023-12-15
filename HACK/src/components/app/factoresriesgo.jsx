import React from 'react';
import styled from 'styled-components';
import InferiorRiesgo from './InferiorRiesgo';
import img1 from '../img/IMG1.jpeg';
import img2 from '../img/IMG2.jpeg';
import img3 from '../img/IMG3.jpeg';

const FactoresRiesgo = () => {
  return (
    <>
      <Container>
        <Titulo>CONOCE ALGUNOS FACTORES QUE DEBES TOMAR EN CUENTA</Titulo>
        <CardContainer>
          <Card>
            <Image src={img1} alt="Edad" />
            <CardLabel>Edad</CardLabel>
          </Card>
          <Card>
            <Image src={img2} alt="Uso excesivo de las redes sociales" />
            <CardLabel>Uso excesivo de las redes sociales</CardLabel>
          </Card>
          <Card>
            <Image src={img3} alt="Baja autoestima" />
            <CardLabel>Baja autoestima</CardLabel>
          </Card>
        </CardContainer>
        <ImageContainer>
          <RoundImage src="https://www.elcomercio.com/wp-content/uploads/2022/08/4068431-scaled-e1660956957886-700x391.jpg" alt="Necesidad de afecto y atención" />
          <ImageText>
            <ImageTitle>NECESIDAD DE AFECTO Y ATENCIÓN</ImageTitle>
            <ImageDescription>Texto</ImageDescription>
          </ImageText>
        </ImageContainer>
      </Container>
      <InferiorRiesgo />
    </>
  );
};

export default FactoresRiesgo;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #225859;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h3`
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #ffffff;
`;

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Card = styled.div`
  width: 30%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0002;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const CardLabel = styled.label`
  margin-top: 1rem;
  text-align: center;
  color: #225859;
`;

const ImageContainer = styled.div`
  width: 80%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageText = styled.div`
  margin-left: 2rem;
`;

const ImageTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
`;

const ImageDescription = styled.p`
  font-size: 1rem;
  color: #ffffff;
`;
