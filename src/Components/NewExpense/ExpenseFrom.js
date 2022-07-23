import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredName,setEnteredName] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const NameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const AmountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }
    const DateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    // console.log("name : "+enteredName)
    // console.log("amount : "+enteredAmount)
    // console.log("Date : "+enteredDate)

    // const [userInput,setUserIntput] = useState({
    //     name : '',
    //     amount : '',
    //     date : new Date('')
    // });

    // const NameChangeHandler = (event) =>{
    //     setUserIntput({
    //         ...userInput,
    //         name : event.target.value
    //     });
    // }
    // const AmountChangeHandler = (event) =>{
    //     setUserIntput({
    //         ...userInput,
    //         amount : event.target.value
    //     });
    // }
    // const DateChangeHandler = (event) =>{
    //     setUserIntput({
    //         ...userInput,
    //         date : new Date(event.target.value)
    //     });
    // }

    // const NameChangeHandler = (event) =>{
    //     setUserIntput((prev)=>{
    //         return {
    //             ...prev,
    //             name : event.target.value
    //         }
    //     });
    // }
    // const AmountChangeHandler = (event) =>{
    //     setUserIntput((prev)=>{
    //         return {
    //             ...prev,
    //             amount : event.target.value
    //         }
    //     });
    // }
    // const DateChangeHandler = (event) =>{
    //     setUserIntput((prev)=>{
    //         return {
    //             ...prev,
    //             date : new Date(event.target.value)
    //         }
    //     });
    // }

    const submitHandler = (event) =>{
        // event.preventDefault();
    }

    const AddExpenseChangeHandler = (event) => {

        const enteredExpenseData = {
            name : enteredName,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
        
        props.onSaveExpenseData(enteredExpenseData);

        setEnteredName("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    const CancelChangeHandler = (event)=>{
        props.onCancelClicked();
        console.log("from CancelChangeHandler");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="ExpenseFrom-wrapper">
                <div className="ExpenseForm-element">
                    <label>Name</label>
                    <input type='text' name="name" value={enteredName} onChange={NameChangeHandler}/>
                </div>
                <div className="ExpenseForm-element">
                    <label>Amount</label>
                    <input type='number' name="amount" value={enteredAmount} min={0.5} max={9999} step={0.5} onChange={AmountChangeHandler}/>
                </div>
                <div className="ExpenseForm-element">
                    <label>Date</label>
                    <input type='date' name="date" value={enteredDate} onChange={DateChangeHandler}/>
                </div>
                <div className="btn-NewExpense">
                    <button onChange={CancelChangeHandler}>Cancel</button>
                    <button onChange={AddExpenseChangeHandler}>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;