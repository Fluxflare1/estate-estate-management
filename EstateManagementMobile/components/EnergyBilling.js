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
