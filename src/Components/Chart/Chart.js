import React from "react";
import Card from "../UI/Card";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {

    return (
        <Card className="chart-content">
            <h1 className="chart-title">annual expenses</h1>
            <div className="chart-flex">
                {
                    props.DataToChart.map((element) => {
                        return <ChartBar
                            key={parseInt(Math.random()*1000000)}
                            title={element.title}
                            value={element.value} 
                            maxValue={props.MaxVal} 
                            />
                    })
                }
            </div>
        </Card>
    );
}

export default Chart;