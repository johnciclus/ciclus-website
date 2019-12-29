import React, {Component} from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>Other text</p>
        </div>
    )
}

export default userOutput;