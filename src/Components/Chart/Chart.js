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
                    props.Items.map((element) => {
                        return <ChartBar 
                            key={parseInt(Math.random()*1000)}
                            title={element.date.getFullYear()}
                            value={element.amount} 
                            maxValue={props.maxValue} 
                            />
                    })
                }
            </div>
        </Card>
    );
}

export default Chart;