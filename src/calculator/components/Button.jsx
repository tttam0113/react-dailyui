import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        return (
            <div className="Button" onClick={this.props.onButtonClick} data-size={this.props.size} data-value={this.props.value} >
                {this.props.label}
            </div>
        );
    }
}

Button.propTypes = {
    value: PropTypes.string, 
    size: PropTypes.string,
    label: PropTypes.string,
    onButtonClick: PropTypes.func
};

export default Button;