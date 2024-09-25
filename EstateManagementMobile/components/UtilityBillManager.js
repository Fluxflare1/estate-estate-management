import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
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
        setUtilityBills([...utilityBills, { ...newBill, id: utilityBills.length + 1 }]); // Temporary ID for display
        setNewBill({ utility_type: '', amount: '', due_date: '' });
    };

    return (
        <View>
            <Text>Utility Bills</Text>
            <TextInput placeholder="Utility Type" value={newBill.utility_type} onChangeText={(text) => setNewBill({ ...newBill, utility_type: text })} />
            <TextInput placeholder="Amount" value={newBill.amount} onChangeText={(text) => setNewBill({ ...newBill, amount: text })} />
            <TextInput placeholder="Due Date" value={newBill.due_date} onChangeText={(text) => setNewBill({ ...newBill, due_date: text })} />
            <Button title="Add Bill" onPress={addUtilityBill} />
            <FlatList
                data={utilityBills}
                keyExtractor={bill => bill.id.toString()}
                renderItem={({ item }) => (
                    <Text>{item.utility_type}: ${item.amount} due on {item.due_date} - Status: {item.status}</Text>
                )}
            />
        </View>
    );
};

export default UtilityBillManager;
