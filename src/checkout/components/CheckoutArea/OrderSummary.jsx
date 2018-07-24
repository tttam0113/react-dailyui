import React from 'react';

const Td = (props) => {
    return (<td>{props.value}</td>);
};

const Tr = (props) => {
    return (
        <tr>
            <Td value={props.name} />
            <Td value={props.value} />
        </tr>
    );
};

class OrderSummary extends React.Component {
    render() {
        const duration = this.props.duration + ' days';

        // Initial total Calculation
        const initialTotal = this.props.duration * this.props.price;

        // Discount Calculation
        const discount = Math.floor((initialTotal / 100) * this.props.discount);

        // Subtotal (with Discount)
        const subTotal = initialTotal - discount;

        // Calculate tax
        const tax = Math.floor((subTotal / 100) * this.props.tax);

        // Total
        const total = subTotal + tax;

        return (
            <div className="OrderSummary">
                <div className="Title">Order Summary</div>
                <table>
                    <tbody>
                        <Tr 
                            name={`${this.props.price} x ${duration}`} 
                            value={`${initialTotal} GBP`} />
                        <Tr
                            name={'Discount'}
                            value={`${discount} GBP`} />
                        <Tr
                            name={'Subtotal'}
                            value={`${subTotal} GBP`} />
                        
                        <Tr
                            name={'Tax'}
                            value={`${tax} GBP`} />
                    </tbody>
                </table>
                <div className="Total">
                    <div className="TotalLabel">Total</div>
                    <div className="Amount">
                        {total} <small>GBP</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderSummary;