import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UtilityBillManager = ({ propertyId }) => {
    const [utilityBills, setUtilityBills] = useState([]);
    const [newBill, setNewBill] = useState({ utility_type: '', amount: '', due_date: '' });

    useEffect(() => {
        const fetchUtilityBills = async () => {
            const response = await axios.get(`/api/utilities/bills/${propertyId}`);
            setUtilityBills(response.data);
        };
        fetchUtilityBills();
    }, [propertyId]);

    const addUtilityBill = async () => {
        await axios.post('/api/utilities/bills', { ...newBill, property_id: propertyId });
        setUtilityBills([...utilityBills, newBill]);
        setNewBill({ utility_type: '', amount: '', due_date: '' });
    };

    return (
        <div>
            <h3>Utility Bills</h3>
            <input type="text" placeholder="Utility Type" value={newBill.utility_type} onChange={(e) => setNewBill({ ...newBill, utility_type: e.target.value })} />
            <input type="number" placeholder="Amount" value={newBill.amount} onChange={(e) => setNewBill({ ...newBill, amount: e.target.value })} />
            <input type="date" value={newBill.due_date} onChange={(e) => setNewBill({ ...newBill, due_date: e.target.value })} />
            <button onClick={addUtilityBill}>Add Bill</button>
            <ul>
                {utilityBills.map(bill => (
                    <li key={bill.id}>{bill.utility_type}: ${bill.amount} due on {bill.due_date} - Status: {bill.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default UtilityBillManager;
