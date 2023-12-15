import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const TiposCancer = () => {
  return (
   <>
    <Container>
      <Titulo>Sobre Nosotros</Titulo>
      <Texto>
        En nuestro sistema, nos dedicamos a brindar servicios de atención médica y cuidado para tus mascotas. Nos
        enorgullece ofrecer servicios de alta calidad y un equipo de profesionales capacitados y amantes de los animales.
      </Texto>
      <MisionVisionValores>
        <MisionVisionValoresItem>
          <ItemTitulo>Misión</ItemTitulo>
          <ItemTexto>Proporcionar atención médica veterinaria excepcional y mejorar la calidad de vida de las mascotas.</ItemTexto>
        </MisionVisionValoresItem>
        <MisionVisionValoresItem>
          <ItemTitulo>Visión</ItemTitulo>
          <ItemTexto>Ser reconocidos como líderes en el cuidado y bienestar de los animales en nuestra comunidad.</ItemTexto>
        </MisionVisionValoresItem>
        <MisionVisionValoresItem>
          <ItemTitulo>Valores</ItemTitulo>
          <ItemTexto>Honestidad, compasión, excelencia y respeto por todas las formas de vida.</ItemTexto>
        </MisionVisionValoresItem>
      </MisionVisionValores>
    
    </Container>
  
   </>
  );
};

export default TiposCancer;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  background: #225859;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin:0 0 1em 0;
`;

const Titulo = styled.h3`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
`;

const Texto = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
`;

const MisionVisionValores = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const MisionVisionValoresItem = styled.div`
  flex: 1;
  margin: 0 1rem;
  background-color: #6c9090;
  padding: 1.5rem;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const ItemTitulo = styled.h4`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

const ItemTexto = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;
`;

const MasInformacion = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const InformacionItem = styled.div`
  background: #069266;
  border-radius: 10px;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

