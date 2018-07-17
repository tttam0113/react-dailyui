import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string
    };


    render() {
        return (<div className="Input"> 
            <input 
                id={this.props.id}
                autoComplete='false'
                required
                type={this.props.type}
                placeholder={this.props.placeholder}
            />
            <label htmlFor={this.props.id}></label>
        </div>);
    }
}