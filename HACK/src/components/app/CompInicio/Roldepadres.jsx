import React from 'react'
import styled from 'styled-components'
import image from '../../img/IMG2.jpeg'
// import imgb from '../../img/img3ellos.png'
// import imgc from '../../img/img4ellos.png'
const Roldepadres = () => {
  return (
<Containera>
<h1>Rol de los padres</h1>
<section>
<article>
<div>
<p>Comunicación abierta: </p>
<p>Mantener una comunicación abierta y honesta con los hijos es fundamental</p>
</div>
    <div>
    <p>Educación sobre seguridad en línea: </p>
    <p>Los padres deben educar a sus hijos sobre los peligros en línea, incluyendo el grooming</p>
    <img src="" alt="" />
    </div>
    
</article>
<article>
<div>
    <p>Supervisión activa: </p>
    <p>Los padres deben supervisar las actividades en línea de sus hijos. Esto puede incluir establecer reglas claras sobre el uso de Internet y las redes sociales</p>
    </div>
<div>
    
<p>Establecimiento de límites: </p>
<p>Los padres deben establecer límites claros en cuanto al uso de la tecnología y las redes sociales. </p>
</div>
 <div>
 <p>Conocimiento de las amistades en línea: </p>
    <p>Los padres deben estar al tanto de las amistades en línea de sus hijos</p>
    <img src="" alt="" />
 </div>
</article>
</section>
</Containera>
  )
}

export default Roldepadres
const Containera = styled.div`
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
color:#fff;
& section{
    display:flex;
    width:80%;
    margin:0 auto ;
    flex-direction:row-reverse;
    & article {
width:50%;
display:flex;
flex-direction:row-reverse;
flex-wrap:wrap;
gap:2em;
padding:2em;
& div:nth-child(2)  {
    width:70%;
    margin:auto;
    padding:0.5em;
    background-color:transparent;
    border-bottom:solid 0.5px #fff;
    border-left:solid 0.5em #fff;
   border-radius:0em;

}
& div {
    width:80%;
    margin:auto;
    padding:0.5em;

    background-color:transparent;
    border-bottom:solid 0.5px #fff;
    border-left:solid 0.5em #fff;
   border-radius:0em;
}
& div:nth-child(3)  {
    width:60%;
    padding:0.5em;

    margin:auto;
    background-color:transparent;
    border-bottom:solid 0.5px #fff;
    border-left:solid 0.5em #fff;
   border-radius:0em;

}
    }
    }
`;
