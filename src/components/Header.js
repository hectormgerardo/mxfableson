import React from 'react';
import "../css/App.css"
import styled from 'styled-components';
import INCON15 from '../assets/ICONOS-15.png';
import { Icon } from 'leaflet';


const Styles = styled.div`
header{


overflow:hidden;
  background-color: #56C02B;
  color: white;
  padding: 0 1%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size: 50px;
  margin: 0;
<<<<<<< HEAD:src/componentes/Header.js
  height: 100px;
  margin-top:25px;
  
  width: "100vw";

.banner{
width: "100vw";,
max-height:100%;
=======


.header-right{
    width:80px;
>>>>>>> ce9673841a3e90c05916475400cd0fde45ea6195:src/components/Header.js
}


}





`;

export const Header = () => {

    return (
        <Styles>
            <header>
<<<<<<< HEAD:src/componentes/Header.js
            <img src={BannerLifeOnLand} class="banner" width="100vw"></img>
=======
            <div className="header-left">15</div>
                    <div className="header-center">Life on Land</div>
                    <img src={INCON15} class="header-right" alt=""/>
>>>>>>> ce9673841a3e90c05916475400cd0fde45ea6195:src/components/Header.js
            </header>
        </Styles>


       

    );
};

export default Header;
