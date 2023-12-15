import React from 'react';
import styled from 'styled-components';

const Paginas = () => {
  return (
    <Container>
      <Titulo>Blog</Titulo>
      <Informacion>
        <Section>
          <Texto>Leyes de protección animal en Bolivia</Texto>
          <Imagen src="https://www.comunicacion.gob.bo/sites/default/files/media/images/ley%20de%20animales%20bolivia.png" alt="" />
          <Descripcion>
            En Bolivia, existen leyes y normativas destinadas a proteger los derechos de los animales. Estas leyes establecen
            medidas de prevención del maltrato animal, regulación de la tenencia responsable de mascotas y sanciones para quienes
            cometan actos de crueldad hacia los animales.
          </Descripcion>
        </Section>
        <Section>
          <Texto>Psicología y bienestar animal</Texto>
          <Imagen src="https://educacionvirtual.javeriana.edu.co/documents/40061/0/Animales_domesticos710.jpg/a36000e1-b895-1d96-fc69-422aed7f36d7?version=1.0&t=1589760806078&download=true" alt="" />
          <Descripcion>
            La psicología aplicada a los animales nos permite entender su comportamiento, emociones y necesidades. Conocer los
            principios básicos de la psicología animal nos ayuda a mejorar su bienestar, fortalecer el vínculo con ellos y
            proporcionarles una vida plena.
          </Descripcion>
        </Section>
        <Section>
          <Texto>Psicología canina y felina</Texto>
          <Imagen src="https://medefor.info/wp-content/uploads/2020/02/curso-psicologia-canina-y-felina-medefor.jpg" alt="" />
          <Descripcion>
            Explora el fascinante mundo de la psicología de perros y gatos. Aprende sobre su comportamiento, instintos, necesidades
            emocionales y técnicas de manejo para promover una convivencia armoniosa y equilibrada con tus mascotas.
          </Descripcion>
        </Section>
        <Section>
          <Texto>Vida saludable para tu mascota</Texto>
          <Imagen src="https://elcomercio.pe/resizer/E-2DQNaWyup6SwajgxIXZtRBs5w=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3LD4UGHJWBCGBKBPWJGN22FJSU.jpg" alt="" />
          <Descripcion>
            Aprende cómo brindar una vida saludable y activa a tu mascota. Explora consejos sobre alimentación balanceada, ejercicio
            adecuado, cuidados veterinarios y bienestar general para asegurar una calidad de vida óptima.
          </Descripcion>
        </Section>
        <Section>
          <Texto>Entendiendo a tu mascota</Texto>
          <Imagen src="https://www.escuelamonicagomez.com/archivos/Noticias/comunicacion_perro.png" alt="" />
          <Descripcion>
            Descubre cómo comunicarte y comprender el lenguaje de tu mascota. Aprende a interpretar su comportamiento, señales y
            necesidades para fortalecer el vínculo entre tú y tu querida mascota.
          </Descripcion>
        </Section>
        <Section>
          <Texto>Conoce el lenguaje de las mascotas</Texto>
          <Imagen src="https://i.ytimg.com/vi/cjsYC8YbiVI/mqdefault.jpg" alt="" />
          <Descripcion>
            Entender el lenguaje de las mascotas, como perros y gatos, es fundamental para una comunicación efectiva y una
            relación armoniosa. Aprender a interpretar sus señales y comportamientos nos ayuda a comprender sus necesidades y
            brindarles el cuidado adecuado.
          </Descripcion>
        </Section>
        <Section>
          <Texto>Educación y entrenamiento de mascotas</Texto>
          <Imagen src="https://www.purina.es/sites/default/files/2021-12/C%C3%B3mo%20hacer%20que%20tu%20perro%20te%20haga%20caso_hero.jpg" alt="" />
          <Descripcion>
            Descubre técnicas de educación y entrenamiento para enseñar a tu mascota buenos modales, obediencia básica y trucos
            divertidos. Aprende cómo establecer límites claros y fomentar comportamientos positivos en tu fiel compañero.
          </Descripcion>
        </Section>
        <Section>
          <Texto>Actividades y diversión para mascotas</Texto>
          <Imagen src="https://cdn.masmovil.es/embed/532528e43966ace0d2ce6073bd41586245841/mascotas.png" alt="" />
          <Descripcion>
            Encuentra ideas y sugerencias para mantener entretenida a tu mascota y fortalecer su bienestar emocional. Descubre juegos,
            juguetes y actividades que estimulan su mente y cuerpo, asegurando momentos de diversión y felicidad.
          </Descripcion>
        </Section>
        <Section>
          <Texto>Cosas que no sabías de las mascotas</Texto>
          <Imagen src="https://www.huellitastristes.com/wp-content/uploads/2015/11/SABIAS-que.jpg" alt="" />
          <Descripcion>
          Los cachorros nacen ciegos y sordos. Su temperatura corporal es más alta que la de los hombres, alrededor de los 38 o 39 ºC. 
          Los perros pueden llegar a entender hasta 250 palabras y gestos distintos. El hocico de los perros, igual que las huellas dactilares humanas, es único.
          </Descripcion>
        </Section>

      </Informacion>
      <Articulo>
        <Titulo>¿Quién protege a los animales en Bolivia?</Titulo>
        <Listado>
          <Item>
            <ItemDescripcion>
              La Institución Defensorial, además, hace un llamado a las autoridades y población en general a contribuir de manera permanente
              en el cuidado, protección y búsqueda del bienestar de los animales domésticos y silvestres, tomando en cuenta que instrumentos
              internacionales como la Declaración Universal de los derechos del .
            </ItemDescripcion>
          </Item>
        </Listado>
      </Articulo>
      <SitiosRelacionados>
        <Titulo>¿Cuáles son las instituciones que protegen a los animales en Bolivia?</Titulo>
        <SitiosContainer>
          <Sitio>
            <SitioImagen src="https://www.example.com/sitio1.jpg" alt="" />
            <SitioNombre>Amor por los animales Bolivia APLAB</SitioNombre>
          </Sitio>
          <Sitio>
            <SitioImagen src="https://www.example.com/sitio2.jpg" alt="" />
            <SitioNombre>Defendiendo Animales Concientizando Humanos DACH Bolivia</SitioNombre>
          </Sitio>
          <Sitio>
            <SitioImagen src="https://www.example.com/sitio3.jpg" alt="" />
            <SitioNombre>Asociación Huellitas Bolivia</SitioNombre>
          </Sitio>
          <Sitio>
            <SitioImagen src="https://www.example.com/sitio4.jpg" alt="" />
            <SitioNombre>Animales SOS Bolivia</SitioNombre>
          </Sitio>
          <Sitio>
            <SitioImagen src="https://www.example.com/sitio5.jpg" alt="" />
            <SitioNombre>CEDAB – Animales Perdidos Y Encontrados</SitioNombre>
          </Sitio>
          <Sitio>
            <SitioImagen src="https://www.example.com/sitio6.jpg" alt="" />
            <SitioNombre>Salvando a Nuestros Peluditos SANP</SitioNombre>
          </Sitio>
          <Sitio>
            <SitioImagen src="https://www.example.com/sitio7.jpg" alt="" />
            <SitioNombre>DUPLA Defensores Unidos Por Los Animales</SitioNombre>
          </Sitio>
          <Sitio>
            <SitioImagen src="https://www.example.com/sitio8.jpg" alt="" />
            <SitioNombre>ARVA Asociación por el Respeto a la Vida Animal</SitioNombre>
          </Sitio>
        </SitiosContainer>
      </SitiosRelacionados>
    </Container>
  );
};

export default Paginas;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
`;

const Titulo = styled.h2`
  
  color: #225859;
  margin: 1em auto;
  padding: 1em;
  border-bottom:solid 1px #225859;
`;

const Informacion = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  margin-bottom: 2em;
`;

const Section = styled.section`
  background-color: #6c9090;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    background-color: #069266;
  }
`;

const Texto = styled.p`
  font-size: 1.2rem;
  color: #225859;
  margin-bottom: 21m;

`;

const Imagen = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Descripcion = styled.p`
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
  flex-grow: 1;
`;

const Articulo = styled.article`
  width: 90%;
  background-color: #ffffff;
  margin: 1em auto;
  padding: 2em;
`;

const Listado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitulo = styled.h4`
  font-size: 1.2rem;
  color: #000000;
  margin-bottom: 0.5em;
`;

const ItemDescripcion = styled.p`
  font-size: 1rem;
  color: #000000;
`;

const SitiosRelacionados = styled.div`
  background-color: #f2f2f2;
  padding: 2em;
`;

const SitiosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  justify-items: center;
`;

const Sitio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SitioImagen = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const SitioNombre = styled.p`
  font-size: 1rem;
  color: #000000;
  text-align: center;
`;
