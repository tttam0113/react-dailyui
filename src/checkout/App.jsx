import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ImagePreview from './components/ImagePreviewArea/ImagePreview';
import Checkout from './components/CheckoutArea/Checkout';

import './style.css';

class Overlay extends Component {
    render() {
        return (
            <div
                className="Overlay"
                style={{ backgroundImage: 'url(' + this.props.image + ')' }}
            >
                Something
            </div>
        );
    }
}

class Container extends Component {
    render() {
        return <div className="Container">{this.props.children}</div>;
    }
}

class Header extends Component {
    render() {
        return (
            <header>
                <input
                    onChange={this.props.onChange}
                    type="range"
                    max="100"
                    min="1"
                    step="1"
                />
            </header>
        );
    }
}

class App extends Component {
    state = {
        mounted: false,
        people: 1,
        price: 320.0,
        tax: 20,
        duration: 5,
        discount: 5
    };

    componentDidMount() {
        this.setState({ mounted: true });
    }

    handleSubmit = e => {
        console.log('Handle ajax submition here');
        e.preventDefault();
    };

    handleChange = e => {
        this.setState({ duration: e.target.value });
    };

    render() {
        const overlay = (
            <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
        );

        const container = (
            <Container>
                <ImagePreview price={this.state.price} duration={this.state.duration} people={this.state.people} image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
                <Checkout duration={this.state.duration} discount={this.state.discount} tax={this.state.tax} price={this.state.price} onSubmit={this.handleSubmit} />
            </Container>
        );
      
        return (
            <div className="App">
                <ReactCSSTransitionGroup transitionName="overlay" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {overlay}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup transitionName="container" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {container}
                </ReactCSSTransitionGroup>
                <Header onChange={this.handleChange} />
            </div>
        );
    }
}

export default App;
