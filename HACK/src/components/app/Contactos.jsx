import React, { useState } from 'react';
import styled from 'styled-components';

const Contactos = () => {
  const [contactos, setContactos] = useState([]);
  const [nuevoContacto, setNuevoContacto] = useState({
    nombre: '',
    gmail: '',
    descripcion: '',
  });

  const handleInputChange = (event) => {
    setNuevoContacto({
      ...nuevoContacto,
      [event.target.name]: event.target.value,
    });
  };

  const agregarContacto = () => {
    setContactos([...contactos, nuevoContacto]);
    setNuevoContacto({ nombre: '', gmail: '', descripcion: '' });
  };

  return (
    <Container>
      <Titulo>Contactos</Titulo>
      <Informacion>
        <Ubicacion>
          <h3>Ubicación:</h3>
          <p>Dirección de la televeterinaria</p>
        </Ubicacion>
        <DatosContacto>
          <h3>Datos de contacto:</h3>
          <p>Teléfono: xxx-xxx-xxxx</p>
          <p>Celular: xxx-xxx-xxxx</p>
        </DatosContacto>
      </Informacion>
      <Formulario>
        <h3>Formulario de contacto:</h3>
        <Input
          type="text"
          name="nombre"
          value={nuevoContacto.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
        />
        <Input
          type="email"
          name="gmail"
          value={nuevoContacto.gmail}
          onChange={handleInputChange}
          placeholder="Gmail"
        />
        <Textarea
          name="descripcion"
          value={nuevoContacto.descripcion}
          onChange={handleInputChange}
          placeholder="Descripción"
        />
        <BotonAgregar onClick={agregarContacto}>Enviar</BotonAgregar>
      </Formulario>
      <Tabla>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Gmail</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index}>
              <td>{contacto.nombre}</td>
              <td>{contacto.gmail}</td>
              <td>{contacto.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </Tabla>
    </Container>
  );
};

export default Contactos;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const Titulo = styled.h2`
  background-color: #225859;
  color: #ffffff;
  margin: 3em auto;
  padding: 1em;
`;

const Informacion = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2em;
  width: 80%;
`;

const Ubicacion = styled.div`
  text-align: center;
  color: #225859;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }

  p {
    color: #6c9090;
  }
`;

const DatosContacto = styled.div`
  text-align: center;
  color: #225859;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }

  p {
    color: #6c9090;
  }
`;

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;

  h3 {
    margin-bottom: 1em;
    color: #225859;
  }
`;

const Input = styled.input`
  padding: 0.5em;
  border-radius: 5px;
  border: 1px solid #000000;
  width: 300px;
  margin-bottom: 1em;
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    border-color: #069266;
  }
`;

const Textarea = styled.textarea`
  padding: 0.5em;
  border-radius: 5px;
  border: 1px solid #000000;
  width: 300px;
  height: 100px;
  margin-bottom: 1em;
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    border-color: #069266;
  }
`;

const BotonAgregar = styled.button`
  padding: 0.5em 1em;
  border-radius: 5px;
  border: none;
  background-color: #069266;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #225859;
  }
`;

const Tabla = styled.table`
  width: 80%;
  margin-bottom: 2em;
  border-collapse: collapse;

  th,
  td {
    padding: 0.5em;
    border: 1px solid #000000;
    text-align: center;
  }

  th {
    background-color: #225859;
    color: #ffffff;
  }

  td {
    background-color: #ffffff;
    color: #225859;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #069266;
      color: #ffffff;
    }
  }
`;
