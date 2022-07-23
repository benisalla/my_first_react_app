import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseFrom";
import ExpensePreForm from "./ExpensePreForm";

const NewExpense = (props) =>{

    const [Toggle,setToggle] = useState(false);

    const SaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            "id" : parseInt(Math.random().toFixed(2)*10)+"",
            ...enteredExpenseData
        };
        props.onSaveNewExpenseData(expenseData);
    };

    const DisplayFormHandler = () =>{
        setToggle((preState) => !preState);
    }

    const CancelClicked = () =>{
        setToggle((preState) => false);
    }

    var Content = <ExpensePreForm onDisplayForm={DisplayFormHandler}/>;

    if(Toggle){
        Content = <ExpenseForm onSaveExpenseData={SaveExpenseData} onCancelClicked={CancelClicked}/>;
    }

    return (
        <div className="NewExpense-container">
            {Content}
        </div>
    );
}

export default NewExpense;
