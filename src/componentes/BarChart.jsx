import React from 'react';
import { Bar } from 'react-chartjs-2';





const  BarChart=(props)=> {



    return (
        <div >

            <Bar options={{
                responsive: true,
                text: 'Population growth (millions): Europe & Africa',
                scales: {
                    xAxes: [{
                        stacked: true,
                        ticks: { display: true },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }],
                    yAxes: [{
                        stacked: true // this also..
                    }]

                }

            }} data={props.data}

            />
        </div>
    )

}

export default BarChart;