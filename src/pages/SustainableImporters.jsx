
import React, { useState, useEffect } from "react";

import BarChart from "../componentes/BarChart";
import ComboBoxTradeReportersImporters from "../componentes/ComboBoxTradeReporters";
import CountryCharacteristics from '../data/CountryCharacteristics.json';


const SustainableImporters =()=>
 {
  const [state,setState]=useState({select: {
  Product: 'abaca',
 iteration: "4",
 scenathon_id :'6',
 column:"Import_quantity"
 }});

  //const [state,setState]=useState([]);
  const [json,setJson]=useState([]);



  
  

  var dataAux = null;
  










  

 const handleChange = e => {

  console.log("it");
  console.log(state.select.iteration);
  console.log()

setState({
      select: {

        ...state.select,
        [e.target.name]: e.target.value,
        iteration: e.target.value==="after"? "4":"3"

      }

});



  }

  

  useEffect(() => 
  {
    
  getNettrade();
  }, [state]);

 

  const getNettrade = async() => {
    try {
   
      const body =state;
      console.log("estado")
      console.log(body);
      const response = await fetch("http://localhost:5000/net/"+JSON.stringify(body));
     const  jsonAux =  await response.json();
     
    setJson(jsonAux);
   console.log(json)
    } catch (error) {
      console.error(error)
    }



  }





//
const converter=()=>{
console.log("render")
function Pais(CountryCharacteristics,data) {
  
  this.type=CountryCharacteristics[0]["type"];
  this.label=CountryCharacteristics[0]["label"];
  this.borderColor=CountryCharacteristics[0]["borderColor"];
  this.backgroundColor=CountryCharacteristics[0]["backgroundColor"];
  this.data=data;
}

//console.log("imprimir caracteristicas")
//var aux =CountryCharacteristics["Argentina"]
//console.log(aux[0]["type"]);

//console.log(this.state.jsonData);

var paisPasado="Argentina";
var data=[];
var paises=[];
var labels=[];

  if (json != null) {

    json.map((item) => {
      if (!labels.includes(item.Year)) {
        labels.push(item.Year);
      }
      data.push(item.Import_quantity);
      if (paisPasado != item.name) {

        //var pais = new Pais(CountryCharacteristics[item.name], data)
        var pais = new Pais(CountryCharacteristics["Argentina"], data)

        paises.push(pais);
        paisPasado = item.name;
        data.splice(0, data.length)

      }
    });


  }


  data = {
    labels:labels,
    datasets:paises
};
 dataAux=data;

  }   

 
    return (

      <div>
        {converter()}
       
        <div>
           <ComboBoxTradeReportersImporters metodo={handleChange} />
        
        </div>

        {/*this.selectDashboard()*/}
       

        <div>
          <BarChart data={dataAux} title="Sustainable - net exporters" />
        </div>


      </div>


    )
  
}


const convertir = (props) => {
  var CHN = [];
  var R_OEU = [];
  var R_CSA = [];
  var R_NEU = [];
  var ARG = [];
  var ZAF = [];
  var BRA = [];
  var IND = [];
  var CAN = [];
  var USA = []
  var AUS = [];
  var R_SSA = [];
  var DEU = [];
  var NOR = [];
  var MEX = [];
  var COL = [];
  var FIN = [];
  var MYS = [];
  var R_NMC = [];
  var R_ASP = [];
  var GBR = [];

  //se guarda el anio
  var labels = [];


  if (props != undefined) {
    props.map((item) => {
      //export quantity (unit 1000 tons) was replace to export_quantity 

      if (item.alpha2 === "CHN") {
        CHN.push(item.export_quantity);
      } else if (item.alpha2 === "R_OEU") {
        R_OEU.push(item.export_quantity);
      } else if (item.alpha2 === "R_CSA") {
        R_CSA.push(item.export_quantity);
      } else if (item.alpha2 === "R_NEU") {
        R_NEU.push(item.export_quantity);
      }
      else if (item.alpha2 === "ARG") {
        ARG.push(item.export_quantity);
      } else if (item.alpha2 === "ZAF") {
        ZAF.push(item.export_quantity);
      } else if (item.alpha2 === "BRA") {
        BRA.push(item.export_quantity);
      } else if (item.alpha2 === "IND") {
        IND.push(item.export_quantity);
      } else if (item.alpha2 === "CAN") {
        CAN.push(item.export_quantity);
      } else if (item.alpha2 === "USA") {
        USA.push(item.export_quantity);
      } else if (item.alpha2 === "AUS") {
        AUS.push(item.export_quantity);
      } else if (item.alpha2 === "R_SSA") {
        R_SSA.push(item.export_quantity);
      } else if (item.alpha2 === "DEU") {
        DEU.push(item.export_quantity);
      } else if (item.alpha2 === "NOR") {
        NOR.push(item.export_quantity);
      } else if (item.alpha2 === "MEX") {
        MEX.push(item.export_quantity);
      } else if (item.alpha2 === "COL") {
        COL.push(item.export_quantity);
      } else if (item.alpha2 === "FIN") {
        FIN.push(item.export_quantity);
      } else if (item.alpha2 === "MYS") {
        MYS.push(item.export_quantity);
      } else if (item.alpha2 === "R_NMC") {
        R_NMC.push(item.export_quantity);
      } else if (item.alpha2 === "R_ASP") {
        R_ASP.push(item.export_quantity);
      } else if (item.alpha2 === "GBR") {
        GBR.push(item.export_quantity);
      }

      if (!labels.includes(item.year)) {
        labels.push(item.year);
      }
    }


    );
  }

  const data = {
    labels: labels,
    datasets: [
      {
        //Aforestation ejemplo
        type: 'bar',
        label: 'CHN',
        data: CHN,
        fill: false,
        backgroundColor: '#faa75a',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }, {
        //Aforestation ejemplo
        type: 'bar',
        label: 'GBR',
        data: GBR,
        fill: false,
        backgroundColor: '#faa75a',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }, {
        //Aforestation ejemplo
        type: 'bar',
        label: 'R_ASP',
        data: R_ASP,
        fill: false,
        backgroundColor: '#faa75a',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'R_OEU',
        data: R_OEU,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#7cb342',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'R_CSA',
        data: R_CSA,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#5a9bd4',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'R_NEU',
        data: R_NEU,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#5e35b1',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'ARG',
        data: ARG,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#00b6cb',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }
      ,
      {
        type: 'bar',
        label: 'ZAF',
        data: ZAF,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#5e35b1',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'BRA',
        data: BRA,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#00b6cb',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'IND',
        data: IND,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#0072f0',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'CAN',
        data: CAN,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#9e67ab',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'USA',
        data: USA,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#0072f0',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'AUS',
        data: AUS,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '##ce7058',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'R_SSA',
        data: R_SSA,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#ffa800',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'DEU',
        data: DEU,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#ec407a',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'NOR',
        data: NOR,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#7ac36a',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'MEX',
        data: MEX,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#f10096',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'COL',
        data: COL,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#ffa800',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'FIN',
        data: FIN,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#5e35b1',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'MYS',
        data: MYS,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#0390d0',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'R_NMC',
        data: R_NMC,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#f10096',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }
    ]
  };

  return data
}

export default SustainableImporters;