import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
import './App.css'
import Chart from "./Components/Chart/Chart";

const __INITIALISE__=[
  {
    "id" : "A-1",
    "name" : "Car Insurance",
    "amount": 294.67,
    "date" : new Date("2021/2/28")
  },
  {
    "id" : "A-2",
    "name" : "Toilet paper",
    "amount": 13.24,
    "date" : new Date("2021/3/13")
  },
  {
    "id" : "A-3",
    "name" : "New TV",
    "amount": 793,
    "date" : new Date("2021/6/1")
  }
];

const __INI_MAX__ = Math.max(...__INITIALISE__.map((ele) => ele.amount))

const App = () => {

  const [ExpenseData, setNewExpenseDate] = useState(__INITIALISE__);
  const [maxValue,setMaxValue] = useState(__INI_MAX__);

  const SaveNewExpenseData = (enteredExpenseData) =>{
    setNewExpenseDate( (prevState) => {
      return ([
        enteredExpenseData,
        ...prevState
      ]);
    }
    );

    setMaxValue(Math.max(...ExpenseData.map((ele) => ele.amount)));
  };

  return (
    <div className="MyApp">
      <div className="Expenses-section">
        <div>
          <NewExpense onSaveNewExpenseData={SaveNewExpenseData}/>
        </div>
        <div>
          <Chart maxValue={maxValue} Items={ExpenseData}/>
        </div>
        <div>
          <Expenses Items={ExpenseData}/>
        </div>
      </div>
    </div>
  );
}

export default App;