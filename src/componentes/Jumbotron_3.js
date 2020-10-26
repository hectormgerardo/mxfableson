import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .bann_3{
       color: #4E4E4E;
       top:5;
       text-align: center;
       font-size:20px;
    }
    .text{
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }
    .scena_{
      text-align:left;
      color: #306973;
    }
    .overlay{
        background-color: #000;
        opacity:0.6;
        position: absolute;
        top:0; 
        left: o;
        bottom: 5;
        right: 0;
        z-index: -1;
    }`;
export const Jumbotron_3 = () => {
  return (
    <Styles>
        <Jumbo fluid className= "text">
            <div className= "overlay"></div>
            <Container>
              <li className="scena_"> Scenathon </li>
                <h1 className = "bann_3">
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h1>

            </Container>
        </Jumbo>
    </Styles>
    
  );
};