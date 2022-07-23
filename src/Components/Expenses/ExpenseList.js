import React from "react";
import ExtensionItem from "./ExtensionItem";
import './ExpenseList.css';

const ExpenseList = (props) => {

    return (
        <ul className="Exp-list">
            {props.Items.length === 0 ? <h1 className='NotFound'>Expenses Not Found</h1> : 
                    props.Items.map((ExpenseElement) => (
                            <ExtensionItem 
                            key = {ExpenseElement.id}
                            name={ExpenseElement.name} 
                            amount={ExpenseElement.amount} 
                            date={ExpenseElement.date}
                            />
                    ))
            }
        </ul>
    );
}

export default ExpenseList;