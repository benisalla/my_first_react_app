import React from "react";
import './ExpensePreForm.css';

const ExpensePreForm = (props) => {

    const ClickHandler = () =>{
        props.onDisplayForm();
    }

    return (
        <div class="preForm">
            <button class="add-btn" onClick={ClickHandler}>Add New Expense</button>
        </div>
    );
}

export default ExpensePreForm;