import React from 'react';
import PropTypes from 'prop-types';

class TimerActionButton extends React.Component {
    static propTypes = {
        timerIsRunning: PropTypes.bool,
        onStartClick: PropTypes.func,
        onStopClick: PropTypes.func,
    }
    render() {
        if (this.props.timerIsRunning) {
            return (
                <div 
                    className="ui bottom attached red basic button"
                    onClick={this.props.onStopClick}
                >
                    Stop
                </div>
            );
        } else {
            return (
                <div 
                    className="ui bottom attached green basic button"
                    onClick={this.props.onStartClick} 
                >
                    Start
                </div>
            );
        }
    }
}

export default TimerActionButton;