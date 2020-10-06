import React from 'react';
import { Bar } from 'react-chartjs-2';


const options = {
    responsive: true,
    tooltips: {
      mode: 'label'
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
            stacked: true,

          display: true,
          gridLines: {
            display: false
          },
          
          
        }
      ],
      yAxes: [
        {
            stacked: true,

          type: 'linear',
          display: true,    
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false,
          },

          labels: {
            show: true,
            position: 'right',
          }
        },
        {
          type: 'linear',
          display: false,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }
      ]
    }
  };
  


const  BarChart=(props)=> {
    
    const data = {
        labels: props.data.labels,
        datasets: [
              {
                //Aforestation ejemplo
                type: 'bar',
                label: 'Rest of Sub-Saharan Africa',
                data:props.data.Rest_of_Sub_Saharan_Africa,
                fill: false,
                backgroundColor: '#faa75a',
                borderColor: '#71B37C',
                hoverBackgroundColor: '#71B37C',
                hoverBorderColor: '#71B37C',
                yAxisID: 'y-axis-1'
              },{
                type: 'bar',
                label: 'Brazil',
                data: props.data.Protected_land_Brazil,
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#7cb342',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-1'
              },{
                type: 'bar',
                label: 'USA',
                data: props.data.Protected_land_USA,
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
                label: 'Canada',
                data:props.data.Protected_land_Canada,
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
                label: 'Australia',
                data: props.data.Protected_land_Australia,
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
                label: 'Russia',
                data: props.data.Protected_land_Russia,
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
                label: 'Rest of Central and South America',
                data: props.data.Protected_land_Rest_of_Central_and_South_America,
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
                label: 'China',
                data: props.data.Protected_land_China,
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#0072f0',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-1'
              },  {
                type: 'bar',
                label: 'Rest of North Africa Middle East and central Asia',
                data: props.data.Rest_of_North_Africa_Middle_East_and_central_Asia,
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#9e67ab',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-1'
              },  {
                type: 'bar',
                label: 'Rest of Asia and Pacific',
                data: props.data.Protected_land_Rest_of_Asia_and_Pacific,
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
                label: 'Rest of European Union ',
                data: props.data.Protected_land_Rest_of_European_Union,
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
                label: 'Mexico',
                data: props.data.Protected_land_Mexico,
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
                label: 'Argentina',
                data: props.data.Protected_land_Argentina,
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#ec407a',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-1'
              },{
                type: 'bar',
                label: 'Indonesia',
                data: props.data.Protected_land_Indonesia,
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#7ac36a',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-1'
              },{
                type: 'bar',
                label: 'Ethiopia',
                data: props.data.Protected_land_Ethiopia,
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
                label: 'Colombia',
                data: props.data.Protected_land_Colombia,
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
                label: 'Germany',
                data: props.data.Protected_land_Germany,
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#5e35b1',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-1'
              },{
                type: 'bar',
                label: 'South Africa',
                data: props.data.Protected_land_South_Africa,
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#0390d0',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-1'
              },{
                type: 'bar',
                label: 'Sweden',
                data: props.data.Protected_land_Sweden,
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
                label: 'Otros',
                data: props.data.Protected_land_Otros,
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#f66d00',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-1'
              }
              
            ]
          };
          return (
            <div>
              <h2>Biodiversity</h2>
              <Bar data={data}
                    options={options}/>
            </div>
          );
      }
      

export default BarChart;