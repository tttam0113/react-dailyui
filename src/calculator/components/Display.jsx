import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    render() {
        const value = this.props.data.join('');
        return (
            <div className="Display">
                {value}
            </div>
        );
    }
}

Display.propTypes = {
    data: PropTypes.array
};

export default Display;

