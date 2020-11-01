import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";

import {Container,Row,Col,Jumbotron} from "react-bootstrap";
import ComboBox from '../components/ComboBox';
import LeafletMap from './LeafletMap';
import CountryCharacteristics from '../data/CountryCharacteristics.json';

const DrawFreshWater2 = () => {



  function FreshWaterTwo(ChartCharacteristics, data) {
    this.data = data;
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];

  }

  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }

  });

  const [json, setJson] = useState([]);
  var data = null;


  useEffect(() => {
    const getFreshWaterTwo = async () => {

      try {
        const body = state;
       const response = await fetch("https://server-fableson.wl.r.appspot.com/freshwater2" + JSON.stringify(body));
      //  const response = await fetch("http://localhost:3456/freshwater2"+JSON.stringify(body));
        const jsonAux = await response.json();
        setJson(jsonAux);
      } catch (error) {
        console.error(error)
      }
    }

    getFreshWaterTwo();
  }, [state]);




  const handleChange = e => {
    var group = state.select.GraficaType;
    var scenathon = state.select.scenathon_id;
    var iteration = state.select.Iteration;
    if (e.target.name === "scenathon_id") {
      switch (e.target.value) {
        case '6':
          iteration = state.select.Iteration === "1" ? "3" : "4";
          scenathon = "6";
          break;
        case '5':
          scenathon = "5";
          iteration = state.select.Iteration === "3" ? "1" : "2";
          break;
        default: iteration = state.select.Iteration === "1" ? "3" : "4";
      }
    } 
    else {
      group = e.target.name === "GraficaType" ? e.target.value : state.select.GraficaType;
      iteration = e.target.name === "Iteration" ? scenathon === "6" ? e.target.value === "after" ? "4" : "3" : e.target.value === "after" ? "2" : "1" : state.select.Iteration;
    }

    setState({
      select: {
        GraficaType: group,
        scenathon_id: scenathon,
        Iteration: iteration,
      }
    });  
  }

  const converter = () => {
    var dataSum = [];
    var freshWater = [];
    var labels = [];
    var nameCounty = state.select.GraficaType === "regions" ? "R_AFR" : "Argentina";

    if (json !== null) {

      json.forEach(item => {
        if (!labels.includes(item.Year)) {
          labels.push(item.Year);
        }
        dataSum.push(item.BlueWater);
        if (nameCounty !== item.Country) {

          var fresh = new FreshWaterTwo(CountryCharacteristics[nameCounty], dataSum);
          freshWater.push(fresh);
          nameCounty = item.Country;


          dataSum = [];
          dataSum.push(item.sum);
        }
      });


    }
    var dataAux = {
      labels: labels,
      datasets: freshWater
    };
    data = dataAux;
  }




  return (
    <Container fluid>
      <div>
        <ComboBox onChange={handleChange} />
        {converter()}
      </div>
      <Row  >
        <Col >
          <div style={{ height: "100vh", width: "35vw" }}>

            <BarChart data={data}
              title="Fresh Water Use 2"
              labelposition="bottom"
              labelSize={15}
              aspectRatio={false} />

          </div>
        </Col>
        <Col>
          <div style={{ borderStyle: 'solid', textAlign: 'center', height: "70vh",width:"35vw"}}>
            {/** 
              <LeafletMap
                
               // countriesData = {dataAux}
              />
              */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}





export default DrawFreshWater2