import React from 'react';
//data



//dashboards
import NetForestCoverChange from '../pages/NetForestCoverChange'
import Biodiversity from '../pages/Biodiversity'
import GlobalTargets from '../pages/GlobalTargets'
import ProtectedAreaByType from '../pages/ProtectedAreaByType'
import LandCover from '../pages/LandCover'
import FoodEnergyIntakePerCapita from '../pages/FoodEnergyIntakePerCapita'



const seleccionarData = (props) => {

     
    if (props.data.dashboard==="gts")
    {
      return   <GlobalTargets combinacion={props.data}/>
    }else if(props.data.dashboard==="ntch")
    { 
     
     return   <NetForestCoverChange combinacion={props.data}/>
                                   
    }else if(props.data.dashboard==="ntch2")
    {
       
      return  <h1>ntch2</h1>
    }else if(props.data.dashboard==="biodeversity")
    {
  
      return   <Biodiversity combinacion={props.data}/>
    }else if(props.data.dashboard==="pabt")
    {
       
      return   <ProtectedAreaByType combinacion={props.data}/>
    }else if(props.data.dashboard==="lc")
    {
       
      return   <LandCover combinacion={props.data}/>
    }else if(props.data.dashboard==="fwu2")
    {
       
      return  <h1>fwu2</h1>
    }
    else if(props.data.dashboard==="fwu2")
    {
       
      return  <h1>fwu2</h1>
    }else if(props.data.dashboard==="fwu2")
    {
       
      return  <h1>fwu2</h1>
    }else if(props.data.dashboard==="fwu2")
    {
       
      return  <h1>fwu2</h1>
    }else if(props.data.dashboard==="feipc")
    {
       
      return   <FoodEnergyIntakePerCapita combinacion={props.data}/>
    }
    return null
  }

export default seleccionarData;

