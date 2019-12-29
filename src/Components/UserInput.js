import React, {Component} from 'react';
import './UserInput.css';

const userInput = (props) => {
    const userInputStyle = {
        border: '1px solid blue',
      }

    return (
        <div className={userInputStyle}>
            <b>Insert text here:</b>
            <input type="text" onChange={props.changed} value={props.username}/>
        </div>
    )
}

export default userInput;