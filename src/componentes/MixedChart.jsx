import React from 'react';
import {Bar} from 'react-chartjs-2';


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
            show: true
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
  
  
  const  drawMixedChart=(props)=> {
    const data = {
      labels: props.data.labels,  
      datasets: [{
        //net_forest_change <- ejemplo
              label: 'Net forest change',
              type:'scatter',
              data:props.data.net_forest_change,
              fill: false,
              


              backgroundColor: 'Green',
              borderColor: '#71B37C',
              hoverBackgroundColor: '#71B37C',
              hoverBorderColor: '#71B37C',
              yAxisID: 'y-axis-1'
            },{
              //net_forest_change <- ejemplo
                    label: 'forest_target',
                    type:'scatter',
                    data:props.data.forest_target,
                    fill: false,
                    borderColor: 'Red',
                    backgroundColor: 'Red',
                    pointBorderColor: 'Red',
                    pointBackgroundColor: 'Red',
                    pointHoverBackgroundColor: 'Red',
                    pointHoverBorderColor: 'Red',
                    yAxisID: 'y-axis-1'
                  }
            ,
            {
              //GFW deforestation <- ejemplo
                    label: 'GWF deforestation',
                    type:'scatter',
                    data:props.data.gfw_deforestation,
                    fill: false,
                    borderColor: 'Black',
                    backgroundColor: 'Black',
                    pointBorderColor: 'Black',
                    pointBackgroundColor: 'Black',
                    pointHoverBackgroundColor: 'Black',
                    pointHoverBorderColor: 'Black',
                    yAxisID: 'y-axis-1'
                  },{
              //Aforestation ejemplo
              type: 'bar',
              label: 'Aforestation',
              data: props.data.aforestation,
              fill: false,
              backgroundColor: '#81c784',
              borderColor: '#81c784',
              hoverBackgroundColor: 'darkgreen',
              hoverBorderColor: '#81c784',
              yAxisID: 'y-axis-1'
            },{
              type: 'bar',
              label: 'Forest loss',
              data: props.data.forest_loss,
              fill: false,
              borderColor: '#EC932F',
              backgroundColor: '#ffd54f',
              pointBorderColor: '#ffd54f',
              pointBackgroundColor: '#ffd54f',
              pointHoverBackgroundColor: '#ffd54f',
              pointHoverBorderColor: '#EC932F',
              yAxisID: 'y-axis-1'
            },
          
          ]
        };
        
  
    return (
        <div>
          <h2>NET FOREST COVER CHANGE</h2>
          <Bar data={data}
                options={options}/>
        </div>
      );
  }
  export default drawMixedChart;