import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import {Container,Row,Col} from "react-bootstrap";
import ComboBoxTradeReportersImporters from "../components/ComboBoxTradeReporters";
import CountryCharacteristics from '../data/CountryCharacteristics.json';
import TradeReportMap from './TradeReportMap'

const SustainableExporter =()=>
{
    function Pais(CountryCharacteristics,data) 
    {
      this.data=data;
      this.type=CountryCharacteristics[0]["type"];
      this.label=CountryCharacteristics[0]["label"];
      this.borderColor=CountryCharacteristics[0]["borderColor"];
      this.backgroundColor=CountryCharacteristics[0]["backgroundColor"];
    }


    const [state,setState]=useState({select: {
        Product: 'abaca',
       iteration: "4",
       column:"Import_quantity",
       scenathon_id:"6"
       }});


       //const [state,setState]=useState([]);
 const [json,setJson]=useState([]);
 var dataChart = null;
 var dataMap = null;
 
 const handleChange = e => {
    var  iteration = e.target.name==="iteration"? e.target.value==="after"?'4':'3':state.select.iteration;
   

 setState({
         select: {
           
             ...state.select,
             
             [e.target.name]: e.target.value,
             iteration:iteration
         }
        
     }) 
 
  }

  useEffect(() => {
    const getNetSustainableImporter = async() => {
      try {
   
        const body =state;
      
        
     
     const response = await fetch("https://server-fableson.wl.r.appspot.com/net"+JSON.stringify(body));
    
  //  const response = await fetch("http://localhost:3456/net"+JSON.stringify(body));
        const  jsonAux =  await response.json();
      
      setJson(jsonAux);
  
      } catch (error) {
        console.error(error)
      }
  
  
  
    }
  
    getNetSustainableImporter();
  }, [state]);

  

  const converter=()=>
  {
    console.log("metodo converter sustainable json")

    
  var dataImport_quantity=[];
  var datasetsCharts=[];

  var labels=[];
  var nameCounty="";
  
    if (json.length !==0) {
      //console.log(json);
      var firstElement =JSON.parse(JSON.stringify(json[0]));
     
      nameCounty=firstElement["name"];
      json.forEach(item => 
        {
        
        if (!labels.includes(item.Year)) 
        {
         
          labels.push(item.Year);
        }
        dataImport_quantity.push(item.Import_quantity);
        if (nameCounty!==item.name) 
        {
          var pais = new Pais(CountryCharacteristics[nameCounty], dataImport_quantity);
          datasetsCharts.push(pais);
          nameCounty=item.name;
          dataImport_quantity=[];
          dataImport_quantity.push(item.Import_quantity);
        }
      });
    }
   
   var data = {
      labels:labels,
      datasets:datasetsCharts
  };
   dataChart=data;
  }

  return (
    <Container fluid >
    <div >
    <ComboBoxTradeReportersImporters metodo={handleChange} />
        {converter()}
        </div>
                <Row  >
                  <Col>
                  
                  <div style={{height: "100vh", width:"35vw"}}>
               
                      <BarChart data={dataChart} title="Sustainable net exporters"
                                                        labelString='Import quantity'

                        aspectRatio={false}
                        labelposition="bottom"/> 
                  </div>
                  
                  </Col>
                  <Col>
    
                  <div style={{borderStyle:'solid', textAlign:'center', height: "70vh",width:"35vw"}}>
                
                 {/** 
                  <TradeReportMap countriesData = {dataChart} />
                   */}

                   <TradeReportMap countriesData = {dataChart} Product={state.select.Product}/>
               
                  
                  </div>
                  </Col>
                </Row>
                {/* 
                <LeafletMap
                  
                    
                   // countriesData = {dataAux}
                  
                  />
                  */}
              </Container>          
    );

}
export default SustainableExporter;