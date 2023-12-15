import React from 'react'
import styled from 'styled-components'
import image from '../img/gatos.png';
import Video from './CompInicio/Video';
import Televeterinaria from './CompInicio/Televeterinaria';
import Footer from './Footer';
import TiposCancer from './TiposCancer';

const Inicio = () => {
    return (
        <>
            <Section>
                <Div />
                <img src={image} alt="" />

                <article>
                    <h1>AnimTech</h1>
                    <p>Tu compañero, siempre a tu lado: Mantén cerca a tu peludito con nuestro software adorablemente perr-fecto.</p>
                </article>
            </Section>
            <Video />
            <Televeterinaria />
            <TiposCancer/>
            <Footer />
        </>

    )
}

export default Inicio

const Section = styled.section`
position:relative;
display:flex;
justify-content:center;
align-items:center;
width:80vw;
height:70vh;
flex-direction:row-reverse;

& article{
    width:50%;
    height:100%;
    display:flex;
justify-content:center;
align-items:self-start;
flex-direction:column;
& h1{
    font-size:1.2em;
    border-left:solid 1em #225859;
    padding:0.5em ;
    &::first-letter{
    font-size:1.4em;
color:#225859;
    }
}
& p{
        padding:0.5em;
        border-bottom:solid 1px #225859;
        width:70%;
    text-align:justify;
    }
}
& img{
    position:relative;
    top:-5em;
    justify-content:center;
    display:flex;
    align-items:center;
    height:auto;
    width:30%;
    object-fit:cover;
    &:hover{
        filter:drop-shadow(0 2px 5px #fff);
    }
}
`;
const Div = styled.div`
position:absolute;
width:70vw;
height:70vh;
background: linear-gradient(to right , #f5f5f5 65%, #225859 35%);
z-index:-1;

`;
