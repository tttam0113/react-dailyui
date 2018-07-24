import React, { Component } from 'react';
import update from 'react-addons-update';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import math from 'mathjs';

import './App.css';

class App extends Component {
    state = {
        operations: []
    };

    calculateOperations = () => {
        var result = this.state.operations.join('');
        if (result) {
            result = String(math.eval(result));
            this.setState({ operations: [result] });
        }
    };

    handleButtonClick = e => {
        var value = e.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                this.setState({ operations: [] });
                break;
            case 'equal':
                this.calculateOperations();
                break;
            default:
                var newOperations = update(this.state.operations, {
                    $push: [value]
                });
                this.setState({ operations: newOperations });
                break;
        }
    };

    render() {
        return (
            <div className="App">
                <Display data={this.state.operations} />
                <ButtonPanel onButtonClick={this.handleButtonClick} />
            </div>
        );
    }
}

export default App;
