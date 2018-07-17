import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from './components/Modal';
import './styles.css';


class App extends Component {

    state = {
        mounted: false
    };
    

    componentDidMount() {
        this.setState( {mounted: true} );
    }

    handleSubmit( e ) {
        this.setState( {mounted: false} );
        e.preventDefault();
    }

    render() {
        let child;
        if ( this.state.mounted ) {
            child = (<Modal onSubmit={this.handleSubmit} />);
        }

        return (
            <div className='App'>
                <ReactCSSTransitionGroup 
                    transitionName='example'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {child}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default App;