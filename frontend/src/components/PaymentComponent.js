import React, { useEffect, useState } from 'react';

const PaymentComponent = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch('/api/payments/')
            .then(response => response.json())
            .then(data => setPayments(data));
    }, []);

    return (
        <div>
            <h2>Payments List</h2>
            <ul>
                {payments.map(payment => (
                    <li key={payment.id}>{payment.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentComponent;
