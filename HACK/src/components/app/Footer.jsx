import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Footera>
      <section>
        <h2>AnimTech</h2>
        <p></p>
      </section>
      <article>
        <div>
          <li>
          
            <Links to="/">Inicio</Links>
          </li>
          <li>
            <Links to="/SobreNosotros">Sobre Nosotros</Links>
          </li>
          <li>
            <Links to="/Páginas">Páginas</Links>
          </li>
          <li>
            <Links to="/Contacto">Contacto</Links>
          </li>
          <li>
            <Links to="/Acceso">Acceso</Links>
          </li>
        </div>
      </article>
    </Footera>
  );
};

export default Footer;

const Footera = styled.footer`
  width: 100%;
  height: 30vh;
  background-color: #225859;
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  overflow: hidden;
color:#fff;
  & > section {
    width: 25%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    & h2 {
      background-color: transparent;
      font-size: 1.5em;
      text-transform: uppercase;
      color:#fff;

      transition: all 1s linear;

      &::first-letter {
        font-size: 2em;
      }

      &:hover {
        color: #1B2223;
      }
    }

    & img {
      width: 50px;
      height: auto;
      background-color: transparent;
      filter: invert(100%);
    }
  }

  & p {
    background-color: transparent;
    font-size: 0.9em;
    color:#fff;

    margin: 1em 0;
  }

  & article {
    width: 70%;
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & div {
      background-color: transparent;
display:flex;
gap:2em;
      & h4 {
        background-color: transparent;
        font-size: 1em;
        text-transform: uppercase;
        color:#fff;

        transition: all 1s linear;
        font-weight: 100;

        &::first-letter {
          font-size: 1.5em;
        }

        &:hover {
          color: #1B2223;
        }
      }

      & li {
        background-color: transparent;
        padding: 0.5em 0;
      }
    }
  }
`;

const Links = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  color:#fff;

  font-size: 0.9em;
  text-transform: uppercase;
  transition: all 1.5s ease;

  &:hover {
    border-bottom: solid 2px #1B2223;
  }
`;

const Section = styled.section`
  background-color: transparent;
  color:#fff;

  font-size: 0.9em;

  & div {
    display: flex;
    flex-direction: row;
    gap: 1em;

    & img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
