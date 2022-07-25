import React,{useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) =>{

    const [filteredYear, setFilteredYear] = useState('2021');

    const FilterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
        props.onFilterChangeHandler(selectedYear); // be carefull (filteredyear does not get updated immediatly)
    }

    const filteredExpenses = props.Items.filter((ele) => {
        return ele.date.getFullYear().toString() === filteredYear ;
    }
    );

    

    return (
        <Card className='Expenses-content'>
            <ExpenseFilter selected={filteredYear} onFilterChange={FilterChangeHandler}/>
            <ExpenseChart filteredData={filteredExpenses}/>
            <ExpenseList Items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses



/* ===============================<< first method >>=================================== */
/* {filteredExpenses.length === 0 ? <h1>Expenses Not Found</h1> : props.Items.map((ExpenseElement) => (
        <div className="Expenses-items" key = {ExpenseElement.id}>
            <ExtensionItem 
            name={ExpenseElement.name} 
            amount={ExpenseElement.amount} 
            date={ExpenseElement.date}
            />
        </div>
    ))
} */

/* ===============================<< second method >>=================================== */
// filteredExpenses.length === 0 && <h1>Expenses Not Found</h1>}
// {filteredExpenses.length > 0 && filteredExpenses.map((ExpenseElement) => (
//         <div className="Expenses-items" key = {ExpenseElement.id}>
//             <ExtensionItem 
//             name={ExpenseElement.name} 
//             amount={ExpenseElement.amount} 
//             date={ExpenseElement.date}
//             />
//         </div>
//     ))
// }
/* ===============================<< third method >>=================================== */
// let ExpenseContent = <h1 className='NotFound'>Expenses Not Found</h1>;
// if(filteredExpenses.length > 0){
//     ExpenseContent = filteredExpenses.map((ExpenseElement) => (
//         <div className="Expenses-items" key = {ExpenseElement.id}>
//             <ExtensionItem 
//             name={ExpenseElement.name} 
//             amount={ExpenseElement.amount} 
//             date={ExpenseElement.date}
//             />
//         </div>
//     ))
// }
