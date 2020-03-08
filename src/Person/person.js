import React from 'react';
import './person.css'
const person=(props) => {
    return (
        <div className="stylish">
    <p onClick={props.click} > my name is {props.name} and i am {props.children}</p>
    <input type="text" onChange={props.x}/>
    </div>
    )
};
export default person;