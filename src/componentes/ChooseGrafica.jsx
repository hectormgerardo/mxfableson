import React from 'react';
import BarChart from './BarChart'



function crearData() {
    console.log("asasass");

}



function ChooseGrafica(props) {
    crearData();
    const efe = {

        labels: ["2000", "2005", "2010", "2015", "2020", "2025", "2030", "2035", "2040", "2045", "2050"],
        datasets: [
            {
                label: "1",
                backgroundColor: "#307a33",
                data: [368026.27, 368026.27, 368026.27, 385782.29, 5, 9, 7, 6, 2, 6]


            },
            {
                label: "2",
                backgroundColor: "#81c784",
                data: [540342.81, 540342.81, 540342.81, 540342.81, 5, 9, 7, 6, 2, 6]
            },
            {
                label: "3",
                backgroundColor: "#ffd54f",
                data: [859805.55, 859805.55, 859805.55, 859805.55, 887919, 46]

            }
        ]

    }


    if (props.data.select.GraficaType === "group" && props.data.select.Iteration === "iteration_4" && props.data.select.Scenario === "Sustainaible") {
        return <props.grafica data={efe} />
    } else if (props.data.select.GraficaType === "group" && props.data.select.Iteration === "iteration_3" && props.data.select.Scenario === "Sustainaible") {
        return <h1>group iteration_3 Sustainaible</h1>
    } else if (props.data.select.GraficaType === "group" && props.data.select.Iteration === "iteration_4" && props.data.select.Scenario === "Current_trend") {
        return <h1>group iteration_4 Current_trend</h1>
    } else if (props.data.select.GraficaType === "group" && props.data.select.Iteration === "iteration_3" && props.data.select.Scenario === "Current_trend") {
        return <h1>group iteration_3 Current_trend</h1>
    } else if (props.data.select.GraficaType === "regions" && props.data.select.Iteration === "iteration_4" && props.data.select.Scenario === "Sustainaible") {
        return <h1>regions iteration_4    Sustainaible</h1>
    } else if (props.data.select.GraficaType === "regions" && props.data.select.Iteration === "iteration_3" && props.data.select.Scenario === "Sustainaible") {
        return <h1>regions iteration_3    Sustainaible</h1>
    } else if (props.data.select.GraficaType === "regions" && props.data.select.Iteration === "iteration_4" && props.data.select.Scenario === "Current_trend") {
        return <h1>regions iteration_4    Current_trend</h1>
    } else if (props.data.select.GraficaType === "regions" && props.data.select.Iteration === "iteration_3" && props.data.select.Scenario === "Current_trend") {
        return <h1>regions iteration_3    Current_trend</h1>
    } else if (props.data.select.GraficaType === "countries" && props.data.select.Iteration === "iteration_4" && props.data.select.Scenario === "Sustainaible") {
        return <h1>countries iteration_4    Sustainaible</h1>
    }else if (props.data.select.GraficaType === "countries" && props.data.select.Iteration === "iteration_3" && props.data.select.Scenario === "Sustainaible") {
        return <h1>countries iteration_3    Sustainaible</h1>
    } else if (props.data.select.GraficaType === "countries" && props.data.select.Iteration === "iteration_4" && props.data.select.Scenario === "Current_trend") {
        return <h1>countries iteration_4    Current_trend</h1>
    } else if (props.data.select.GraficaType === "countries" && props.data.select.Iteration === "iteration_3" && props.data.select.Scenario === "Current_trend") {
        return <h1>countries iteration_3    Current_trend</h1>
    }
    return null
}
export default ChooseGrafica;