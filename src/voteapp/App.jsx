import React, {Component} from 'react';
import * as Seed from './seed';
import ProductList from './components/ProductList';

class App extends Component {

    render() {
        console.log(Seed.products);
        return (<ProductList products={Seed.products}/>);
    }

}

export default App;