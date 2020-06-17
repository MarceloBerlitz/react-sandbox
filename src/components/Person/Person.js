import React from 'react';

const person = props => {

    const inputChangeHandler = event => {
        props.changed(props.name, event.target.value)
    };

    return (
        <div>
            <h2>{props.name}</h2>
            <input type="text" value={props.name} onChange={inputChangeHandler} />
        </div>
    )
}

export default person;