import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .bann_{
       color: #4E4E4E;
       top:5;
       text-align: center;
       font-size:20px;
    }
    .About{
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }
    .about_{
      text-align:left;
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
const About = () => {
  return (
    <Styles>
        <Jumbo fluid className= "About">
            <div className= "overlay"></div>
            <Container>
              <li className="about_">ABOUT</li>
                <h1 className = "bann_">
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h1>

            </Container>
        </Jumbo>
    </Styles>
    
  );
};
export default About;