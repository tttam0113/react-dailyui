import React from 'react';
import PropTypes from 'prop-types';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {

    static propTypes = {
        timers: PropTypes.array.isRequired,
        onFormSubmit: PropTypes.func,
        onTrashClick: PropTypes.func,
        onStartClick: PropTypes.func,
        onStopClick: PropTypes.func,
    };

    render() {
        const timers = this.props.timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick}
            />
        ));
        return (
            <div id='timers'>
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;