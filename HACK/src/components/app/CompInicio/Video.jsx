import React from 'react'
import styled from 'styled-components'

const Video = () => {
  return (
    <Divvideo>
        <h2>
        Video - EL VALOR DE LA SENSIBILIZACIÓN POR LOS ANIMALES!!
        </h2>
        <div>
    <iframe src="https://www.youtube.com/embed/IRvn-is9xjo" frameborder="0" allowfullscreen></iframe>
    <p>Adoptar un perro con responsabilidad y compromiso es una estupenda opción cuando hay niños en casa. De esta manera, aprovecharemos para enseñar a los pequeños, de primera mano, las consecuencias del abandono de animales. Algunas pautas que ayudan a que la familia con niños adopte con éxito son: explicar al niño en qué consiste la adopción, acudir toda la familia al albergue para adoptar al perro, implicar a los niños en el proceso de elección del animal y, una vez que el perro está en casa, educar al can entre todos.
Muchos padres tienen hijos a quienes les gustan los animales y que desean, además, tener un perro en casa. Los pequeños pueden llegar a ser muy insistentes cuando quieren algo, pero hay que hacerles entender que tener un animal no es un capricho, sino que implica grandes sacrificios y muchas responsabilidades. A continuación, se explican varias pautas para una familia con niños que decide adoptar un perro.</p>
       
  </div>
   </Divvideo>
  )
}

export default Video
const Divvideo = styled.div`
width:90vw;
margin:0 auto;
& h2{
    font-size:1em;
    color:#225859;
    position:relative;
    padding:0 2.5em;
    width:90%;
    margin:2em auto;
    &::before{
        position:absolute;
        content:"";
        background-color:#225859;
        width:2em;
        height:2em;
        transform:rotatez(45deg);
        top:0;
        left:0;
    }
}
& > div{
    width:100%;
    display:flex;
    flex-direction:row;
    gap:2em;
    height:80vh;
    & iframe{
        width:50%;
        height:100%;
        margin:0 auto;
    }
    & >p {
        width:38%;
        height:auto;
        text-align:justify;
        border-bottom:solid 2px #225859;
        padding:1em;
        &::first-letter{
            color:#225859;
            font-size:2em;

        }
    }
}

`;
