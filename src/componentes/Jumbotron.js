  
import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import banner from '../componentes/banner.jpg';

const Styles = styled.div`
    .bann{
       color: white;
       text-align: center;
    }
    .jumbo{
        background: url(${banner.jpg})
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
        bottom: -5;
    }
    .overlay{
        background-color: #000;
        opacity:0.6;
        position: absolute;
        top:0;
        left: o;
        bottom: -5;
        right: 0;
        z-index: -1;
    }`;


const Jumbotron = () => {
    return(

    <Styles>
        <Jumbo fluid className= "jumbo">
            <div className= "overlay"></div>
            <Container>
                <h1 className = "bann">Scenathon 2020</h1>
            </Container>
        </Jumbo>
    </Styles>
    )
}; export default Jumbotron;