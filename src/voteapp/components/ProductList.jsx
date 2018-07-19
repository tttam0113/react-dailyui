import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends React.Component {
    static propTypes = {
        products: PropTypes.array
    }

    state = {
        products: []
    }

    componentDidMount() {
        this.setState({products: this.props.products });
    }

    handleProductUpVote = (productId) => {
        console.log(productId + ' was upvoted.');
        const products = this.state.products;
        const nextProducts = products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts
        });
    }

    render() {
        const products = this.state.products.sort((a, b) => (b.votes - a.votes));
        const productComponents = products.map( (product) => (
            <Product 
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ) );
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

export default ProductList;