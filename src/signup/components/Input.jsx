import React from 'react';

export default class Input extends React.Component {
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