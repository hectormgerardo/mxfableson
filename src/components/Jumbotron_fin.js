import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  
    }
    .fin_t{
        background-color: #528D93;

        background-size: cover;
        color: #ccc;
        height: 20px;
        position: relative;
        z-index: -2;
    }
    .fin{
      text-align:center;
      color: #000000;
    }
    .overlay{
        background-color: #528D93;
        opacity:0.6;
        position: absolute;
        top:0; 
        left: o;
        bottom: 5;
        right: 0;
        z-index: -1;
    }`;
export const Jumbotron_fin = () => {
  return (
    <Styles>
        <Jumbo fluid className= "fin_t">
            <div className= "overlay"></div>
            <Container>
            <li className="fin">Copyright ©</li>

            </Container>
        </Jumbo>
    </Styles>
    
  );
};