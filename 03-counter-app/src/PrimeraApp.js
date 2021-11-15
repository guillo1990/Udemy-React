import { Fragment } from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({str, sec}) => {

    return (
        <>
            <h1>{ str }</h1>
            <p>{ sec }</p>
        </>        
    );

}

PrimeraApp.propTypes = {
    str: PropTypes.string.isRequired,
    sec: PropTypes.string.isRequired 
};

PrimeraApp.defaultProps = {
    str: 'Hello World',
    sec: 'My First App'
};

export default PrimeraApp;