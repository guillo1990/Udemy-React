import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const handleAdd = (e) => {
        console.log(e);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>

            <button onClick={ handleAdd }>+1</button>
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