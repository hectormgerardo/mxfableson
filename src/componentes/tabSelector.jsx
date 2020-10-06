import React from 'react';
//data



//dashboards
import NetForestCoverChange from '../pages/NetForestCoverChange'
import Biodiversity from '../pages/Biodiversity'



const seleccionarData = (props) => {
   
   
    if (props.data.dashboard==="gts")
    {
       return <h1>Gts</h1>
    }else if(props.data.dashboard==="ntch")
    {
        
     return   <NetForestCoverChange combinacion={props.data}
                                   />

       
    }else if(props.data.dashboard==="ntch2")
    {
       
      return  <h1>ntch2</h1>
    }else if(props.data.dashboard==="biodeversity")
    {
       console.log("flag biodiversiti")
      return   <Biodiversity combinacion={props.data}/>
    }else if(props.data.dashboard==="pabt")
    {
       
      return  <h1>pabt</h1>
    }else if(props.data.dashboard==="lc")
    {
       
      return  <h1>lc</h1>
    }else if(props.data.dashboard==="fwu2")
    {
       
      return  <h1>fwu2</h1>
    }
    return null
}

export default seleccionarData;

