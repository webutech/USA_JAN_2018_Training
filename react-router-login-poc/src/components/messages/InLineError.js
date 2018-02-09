import React from 'react';
import PropTypes from 'prop-types';


const InLineError = ({text}) => {
    return (
        <span style={{color:"#912d2b"}}>
            {text}
        </span>
    );
};

InLineError.propTypes ={
    text:PropTypes.string.isRequired
};

export default InLineError;