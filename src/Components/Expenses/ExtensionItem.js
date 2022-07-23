import React from 'react';

import Card from '../UI/Card';
import ExtensionDate from './ExtensionDate';
import './ExtensionItem.css';


const ExtensionItem = (props) => {

    // const [name, setName] = useState(props.name)
    // const clickHandler = () =>{
    //     setName("got Updated !");
    // }
    // <button onClick={clickHandler} className='btn'>Update</button>

    return (
        <li className="Expenses-items ListItem" >
            <Card className='ExtensionItem_content'>
                <div>
                    <ExtensionDate date={props.date}/>
                </div>

                <div className='ExtensionItem_name'>
                    <p>{props.name}</p>
                </div>

                <div className='ExtensionItem_card'>
                    <p>${props.amount}</p>
                </div>
            </Card>
        </li>
    );
}

export default ExtensionItem