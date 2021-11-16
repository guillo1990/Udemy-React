import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubs = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ () => setCounter(counter + 1) }>+1</button>
            <button onClick={ () => setCounter(value) }>Reset</button>
            <button onClick={ () => setCounter(counter - 1) }>-1</button>
        </>        
    );

};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired 
};

// CounterApp.defaultProps = {
//     str: 'Hello World',
//     sec: 'My First App'
// };

export default CounterApp;