import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({children, ...rest}) => (
    <button className='button' {...rest}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired
};

export default Button;