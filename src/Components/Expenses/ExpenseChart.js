import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {

    const DataObj = [
        {title:"Jan" , value: 0},
        {title:"Feb" , value: 0},
        {title:"Mar" , value: 0},
        {title:"Abr" , value: 0},
        {title:"May" , value: 0},
        {title:"Jun" , value: 0},
        {title:"Jul" , value: 0},
        {title:"Aug" , value: 0},
        {title:"Oct" , value: 0},
        {title:"Sep" , value: 0},
        {title:"Dec" , value: 0}
    ];

    for(const Data of props.filteredData){
        DataObj[Data.date.getMonth()].value += Data.amount;
    }

    const maxValue = Math.max(...DataObj.map(element => element.value));


    return <Chart MaxVal={maxValue} DataToChart={DataObj}/>;

}

export default ExpenseChart;