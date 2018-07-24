import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {

    render() {
        return (
            <div className="Buttons">
                <Button onButtonClick={this.props.onButtonClick} label="C" value="clear" />
                <Button onButtonClick={this.props.onButtonClick} label="7" value="7" />
                <Button onButtonClick={this.props.onButtonClick} label="4" value="4" />
                <Button onButtonClick={this.props.onButtonClick} label="1" value="1" />
                <Button onButtonClick={this.props.onButtonClick} label="0" value="0" />
                
                <Button onButtonClick={this.props.onButtonClick} label="/" value="/" />
                <Button onButtonClick={this.props.onButtonClick} label="8" value="8" />
                <Button onButtonClick={this.props.onButtonClick} label="5" value="5" />
                <Button onButtonClick={this.props.onButtonClick} label="2" value="2" />
                <Button onButtonClick={this.props.onButtonClick} label="." value="." />
                
                <Button onButtonClick={this.props.onButtonClick} label="x" value="*" />
                <Button onButtonClick={this.props.onButtonClick} label="9" value="9" />
                <Button onButtonClick={this.props.onButtonClick} label="6" value="6" />
                <Button onButtonClick={this.props.onButtonClick} label="3" value="3" />
                <Button label="" value="null" />
                
                <Button onButtonClick={this.props.onButtonClick} label="-" value="-" />
                <Button onButtonClick={this.props.onButtonClick} label="+" size="2" value="+" />
                <Button onButtonClick={this.props.onButtonClick} label="=" size="2" value="equal" />
                {/* <div>
                    <Button name="AC" onButtonClick={this.handleButtonButtonClick} />
                    <Button name="+/-" onButtonClick={this.handleButtonButtonClick} />
                    <Button name="%" onButtonClick={this.handleButtonButtonClick} />
                    <Button
                        name="÷"
                        onButtonClick={this.handleButtonButtonClick}
                        orange
                    />
                </div>
                <div>
                    <Button name="7" onButtonClick={this.handleButtonButtonClick} />
                    <Button name="8" onButtonClick={this.handleButtonButtonClick} />
                    <Button name="9" onButtonClick={this.handleButtonButtonClick} />
                    <Button
                        name="x"
                        onButtonClick={this.handleButtonButtonClick}
                        orange
                    />
                </div>
                <div>
                    <Button name="4" onButtonClick={this.handleButtonButtonClick} />
                    <Button name="5" onButtonClick={this.handleButtonButtonClick} />
                    <Button name="6" onButtonClick={this.handleButtonButtonClick} />
                    <Button
                        name="-"
                        onButtonClick={this.handleButtonButtonClick}
                        orange
                    />
                </div>
                <div>
                    <Button name="1" onButtonClick={this.handleButtonButtonClick} />
                    <Button name="2" onButtonClick={this.handleButtonButtonClick} />
                    <Button name="3" onButtonClick={this.handleButtonButtonClick} />
                    <Button
                        name="+"
                        onButtonClick={this.handleButtonButtonClick}
                        orange
                    />
                </div>
                <div>
                    <Button
                        name="0"
                        onButtonClick={this.handleButtonButtonClick}
                        wide
                    />
                    <Button name="." onButtonClick={this.handleButtonButtonClick} />
                    <Button
                        name="="
                        onButtonClick={this.handleButtonButtonClick}
                        orange
                    />
                </div>
                */}
            </div>
        );
    }
}

ButtonPanel.propTypes = {
    onButtonClick: PropTypes.func
};

export default ButtonPanel;