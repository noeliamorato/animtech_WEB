import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const HeaderInicio = () => {
  // const phoneNumber = '+59168540830'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
  // const message = 'Hola, ¿cómo puedo presentar una denuncia sobre mi situación? ¿A quién debo dirigirme?'; // Reemplaza con el mensaje que deseas enviar

  // const handleClick = () => {
  //   const encodedMessage = encodeURIComponent(message);
  //   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  //   window.open(whatsappUrl, '_blank');
  // };

  return (
    <Header>
      <Container>
        <Title>Televeterinaria</Title>
        <Subtitle>
          Un sistema que beneficia a los perros y gatos
        </Subtitle>
        <Typewriter
          options={{
            strings: [
              "Cuidado veterinario a distancia",
              "Consejos de expertos para el bienestar de tu mascota",
              "Consulta médica online para tu animal de compañía",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <ButtonContainer>
          <ContactLink to="/Contactanos" onClick={handleClick}>
            Contactar
          </ContactLink>
        </ButtonContainer>
      </Container>
    </Header>
  );
};

export default HeaderInicio;

const Header = styled.header`
  background-color: #225859;
  color: #ffffff;
  padding: 30px 0;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
`;

const ContactLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  padding: 8px 20px;
  border: solid 2px #ffffff;
  border-radius: 20px;
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffffff;
    color: #225859;
  }
`;
