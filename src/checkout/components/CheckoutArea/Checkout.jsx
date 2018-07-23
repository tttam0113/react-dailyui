import React from 'react';
import OrderSummary from './OrderSummary';
import { PaymentForm } from './PaymentFormComponents';

class Checkout extends React.Component {
    render() {
        return (
            <div className="Checkout">
                <OrderSummary
                    duration={this.props.duration}
                    discount={this.props.discount}
                    tax={this.props.tax}
                    price={this.props.price}
                />
                <PaymentForm onSubmit={this.props.onSubmit} />
            </div>
        );
    }
}

export default Checkout;
