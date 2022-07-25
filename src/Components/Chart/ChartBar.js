import React from "react";
import './ChartBar.css';

const ChartBar = (props) =>{

    let level = "0%";
    if(props.maxValue > 0){
        level = (props.value/props.maxValue)*100+"%";
    }

    return (
        <div className="chartBar-content">
            <div className="bar-content">
                <p className="barLevel" style={{height: level}}></p>
            </div>
            <h2 className="chartBar-title">{props.title}</h2>
        </div>
    );
}

export default ChartBar;