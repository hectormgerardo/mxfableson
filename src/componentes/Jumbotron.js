  
import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Banner from '../assets/banner.jpg';

const Styles = styled.div`
    .bann{
       color: white;
       top:5;
       text-align: center;
       font-size:85px;
    }
    .jumbo{
        background: url(${Banner});
        background-size: cover;
        color: #ccc;
        height: 500px;
        position: relative;
        z-index: -2;
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


export const Jumbotron = () => {
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
};