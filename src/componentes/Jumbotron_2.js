  
import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Banner2 from '../assets/banner_2.jpg';

const Styles = styled.div`
   
    .jumbo2{
        background: url(${Banner2});
        background-size: cover;
        color: #ccc;
        height: 500px;
        position: absoulte;
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


export const Jumbotron_2 = () => {
    return(

    <Styles>
        <Jumbo fluid className= "jumbo2">
            <div className= "overlay"></div>
            <Container>
               
            </Container>
        </Jumbo>
    </Styles>
    )
};