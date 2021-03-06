import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        productImageUrl: PropTypes.string,
        votes: PropTypes.number,
        url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        submitterAvatarUrl: PropTypes.string,
        onVote: PropTypes.func
    }

    handleUpVote = () => {
        this.props.onVote(this.props.id);
    }

    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} alt=''/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large fa fa-caret-up icon' />
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image' src={this.props.submitterAvatarUrl} alt=''/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;