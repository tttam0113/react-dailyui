import React from 'react';
import PropTypes from 'prop-types';
import Helpers from 'utils/Helpers';
import TimerActionButton from './TimerActionButton';

class Timer extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        project: PropTypes.string,
        elapsed: PropTypes.number,
        runningSince: PropTypes.number,
        onEditClick: PropTypes.func,
        onTrashClick: PropTypes.func,
        onStartClick: PropTypes.func,
        onStopClick: PropTypes.func
    };

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    };

    handleStopClick = () => {
        this.props.onStopClick(this.props.id);
    };

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };

    render() {
        const elapsedString = Helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="meta">{this.props.project}</div>
                    <div className="center aligned description">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className="extra content">
                        <span
                            className="right floated edit icon"
                            onClick={this.props.onEditClick}
                        >
                            <i className="fa fa-edit icon" />
                        </span>
                        <span
                            className="right floated trash icon"
                            onClick={this.handleTrashClick}
                        >
                            <i className="fa fa-trash icon" />
                        </span>
                    </div>
                </div>
                <TimerActionButton 
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
            </div>
        );
    }
}

export default Timer;
