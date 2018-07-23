import React from 'react';
import PropTypes from 'prop-types';
import TimerForm from './TimerForm';

class ToggleabelTimerForm extends React.Component {
    static propTypes = {
        onFormSubmit: PropTypes.func,
    }

    state = {
        isOpen: false
    };


    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    handleFormSubmit = timer => {
        this.props.onFormSubmit(timer);
        this.handleFormClose();
    };

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <div className="ui basic content center aligned segment">
                    <button
                        className="ui basic button icon"
                        onClick={this.handleFormOpen}
                    >
                        <i className="fa fa-plus icon" />
                    </button>
                </div>
            );
        }
    }
}

export default ToggleabelTimerForm;
