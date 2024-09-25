import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const EnergyBilling = () => {
    const [bills, setBills] = useState([]);   // Holds the list of bills from API
    const [filteredBills, setFilteredBills] = useState([]);  // Holds filtered bills
    const [filter, setFilter] = useState('All');  // Filter state: 'All', 'Paid', 'Unpaid'

    useEffect(() => {
        // Fetch the energy billing data from API
        axios.get('https://your-api-endpoint.com/users/:userId/energy-bills')
            .then(response => {
                setBills(response.data);  // Set the fetched bills
                setFilteredBills(response.data);  // Set the filtered bills to be all bills initially
            })
            .catch(error => {
                console.error('Error fetching bills:', error);
            });
    }, []);

    // Function to apply the filter when filter state changes
    useEffect(() => {
        let filtered = [];
        if (filter === 'Paid') {
            filtered = bills.filter(bill => bill.is_paid);
        } else if (filter === 'Unpaid') {
            filtered = bills.filter(bill => !bill.is_paid);
        } else {
            filtered = bills;  // Show all bills if filter is "All"
        }
        setFilteredBills(filtered);
    }, [filter, bills]);  // Run this effect whenever filter or bills changes

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Energy Billing</Text>

            {/* Filter Buttons */}
            <View style={styles.filterContainer}>
                <Button title="All" onPress={() => setFilter('All')} />
                <Button title="Paid" onPress={() => setFilter('Paid')} />
                <Button title="Unpaid" onPress={() => setFilter('Unpaid')} />
            </View>

            {/* Display Filtered Bills */}
            {filteredBills.map(bill => (
                <View key={bill.id} style={styles.billContainer}>
                    <Text>Billing Period: {bill.billing_period}</Text>
                    <Text>Energy Consumed: {bill.energy_consumed} kWh</Text>
                    <Text>Amount Due: ${bill.amount_due}</Text>
                    <Text>Due Date: {bill.due_date}</Text>
                    <Text>Payment Status: {bill.is_paid ? 'Paid' : 'Unpaid'}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    billContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
});

export default EnergyBilling;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const EnergyBilling = ({ userId }) => {
    const [billingData, setBillingData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch energy billing data for the user
        axios.get(`https://your-api-endpoint.com/users/${userId}/energy-bill`)
            .then(response => {
                setBillingData(response.data);
            })
            .catch(error => {
                console.error('Error fetching billing data:', error);
                setError('Failed to load billing data');
            });
    }, [userId]);

    if (error) {
        return <Text>{error}</Text>;
    }

    if (!billingData) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Energy Billing</Text>
            <Text>Billing Period: {billingData.billingPeriod}</Text>
            <Text>Energy Consumed: {billingData.energyConsumed} kWh</Text>
            <Text>Total Amount Due: ${billingData.amountDue}</Text>
            <Text>Due Date: {billingData.dueDate}</Text>
            <Text>Status: {billingData.isPaid ? 'Paid' : 'Unpaid'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

export default EnergyBilling;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const EnergyBilling = ({ userId }) => {
    const [billingData, setBillingData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch energy billing data for the user
        axios.get(`https://your-api-endpoint.com/users/${userId}/energy-bill`)
            .then(response => {
                setBillingData(response.data);
            })
            .catch(error => {
                console.error('Error fetching billing data:', error);
                setError('Failed to load billing data');
            });
    }, [userId]);

    if (error) {
        return <Text>{error}</Text>;
    }

    if (!billingData) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Energy Billing</Text>
            <Text>Billing Period: {billingData.billingPeriod}</Text>
            <Text>Energy Consumed: {billingData.energyConsumed} kWh</Text>
            <Text>Total Amount Due: ${billingData.amountDue}</Text>
            <Text>Due Date: {billingData.dueDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

export default EnergyBilling;
