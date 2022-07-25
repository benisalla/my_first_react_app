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

const App = () => {

  const [ExpenseData, setNewExpenseDate] = useState(__INITIALISE__);
  const [FilYear, setFilYear] = useState(__INITIALISE__[0].date.getFullYear());

  const SaveNewExpenseData = (enteredExpenseData) =>{
    setNewExpenseDate( (prevState) => {
      return ([
        enteredExpenseData,
        ...prevState
      ]);
    }
    );
  };
  
  const FilterChangeHandler = (FilteredYear) =>{
    setFilYear(FilteredYear);
  }

  return (
    <div className="MyApp">
      <div className="Expenses-section">
        <div>
          <NewExpense onSaveNewExpenseData={SaveNewExpenseData}/>
        </div>
        <div>
          <Expenses Items={ExpenseData} onFilterChangeHandler={FilterChangeHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;