import React from 'react';
import PropTypes from 'prop-types';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        project: PropTypes.string,
        elapsed: PropTypes.number,
        runningSince: PropTypes.number,
        onFormSubmit: PropTypes.func,
        onTrashClick: PropTypes.func,
    };

    state = {
        editFormOpen: false
    };

    openForm = () => {
        this.setState({ editFormOpen: true });
    };

    closeForm = () => {
        this.setState({ editFormOpen: false });
    };

    handleEditClick = () => {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    };

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    }

    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditClick={this.handleEditClick}
                    onTrashClick={this.props.onTrashClick}
                />
            );
        }
    }
}

export default EditableTimer;
