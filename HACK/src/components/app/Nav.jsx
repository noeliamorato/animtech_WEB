import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar>
      <Logo>
        <h2>AnimTech</h2>
      </Logo>
      <NavLinks>
        <NavLink to="/">Inicio</NavLink>
        {/* <NavLink to="/TiposCancer">Sobre Nosotros</NavLink> */}
        <NavLink to="/Paginas">Blog</NavLink>
        <NavLink to="/Contacto">Contacto</NavLink>
        <NavLink to="http://localhost:5174/">Acceso</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  background-color: #f5f5f5;
  justify-content: flex-start;
  padding:0 2em;
  align-items: center;
  color: #225859;
  font-family: Arial, sans-serif;
  font-size: 1.2em;
  box-shadow:0 2px 5px #0005 ;
  z-index:100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2em;
  font-weight: bold;
  & > h6 {
    margin: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #225859;
  padding: 0.5em 1em;
  font-size: 0.9em;
  transition: all 0.3s;
  position: relative;
&:hover{
  border-bottom: solid 1px #225859;
}
  @media (max-width: 768px) {
    padding: 0.5em;
    font-size: 0.8em;
  }
`;
