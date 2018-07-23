import React from 'react';

const Td = (props) => {
    return (<td>{props.value}</td>);
};

const Tr = (props) => {
    return (<tr>{props.children}</tr>);
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
                        <Tr>
                            <Td value={`${this.props.price} x ${duration}`} />
                            <Td value={`${initialTotal} GBP`} />
                        </Tr>
                        <Tr>
                            <Td value={'Discount'} />
                            <Td value={`${discount} GBP`} />
                        </Tr>
                        <Tr>
                            <Td value={'Subtotal'} />
                            <Td value={`${subTotal} GBP`} />
                        </Tr>
                        <Tr>
                            <Td value={'Tax'} />
                            <Td value={`${tax} GBP`} />
                        </Tr>
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