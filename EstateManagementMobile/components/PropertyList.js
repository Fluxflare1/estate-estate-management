import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);  // Original list of properties
    const [filteredProperties, setFilteredProperties] = useState([]);  // Filtered list
    const [filter, setFilter] = useState('All');  // Filter state: 'All', 'For Sale', 'For Rent', 'Sold'

    useEffect(() => {
        // Fetch properties from the API
        axios.get('https://your-api-endpoint.com/properties')
            .then(response => {
                setProperties(response.data);
                setFilteredProperties(response.data);  // Initially show all properties
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
    }, []);

    // Function to apply filter when the filter state changes
    useEffect(() => {
        let filtered = [];
        if (filter === 'For Sale') {
            filtered = properties.filter(property => property.status === 'For Sale');
        } else if (filter === 'For Rent') {
            filtered = properties.filter(property => property.status === 'For Rent');
        } else if (filter === 'Sold') {
            filtered = properties.filter(property => property.status === 'Sold');
        } else {
            filtered = properties;  // Show all properties if filter is "All"
        }
        setFilteredProperties(filtered);
    }, [filter, properties]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Property List</Text>

            {/* Filter Buttons */}
            <View style={styles.filterContainer}>
                <Button title="All" onPress={() => setFilter('All')} />
                <Button title="For Sale" onPress={() => setFilter('For Sale')} />
                <Button title="For Rent" onPress={() => setFilter('For Rent')} />
                <Button title="Sold" onPress={() => setFilter('Sold')} />
            </View>

            {/* Display Filtered Properties */}
            {filteredProperties.map(property => (
                <View key={property.id} style={styles.propertyContainer}>
                    <Text>{property.name}</Text>
                    <Text>Status: {property.status}</Text>
                    <Text>Price: ${property.price}</Text>
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
    propertyContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
});

export default PropertyList;
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('https://your-api-endpoint.com/properties')
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
    }, []);

    return (
        <View>
            {properties.map(property => (
                <View key={property.id}>
                    <Text>{property.name}</Text>
                </View>
            ))}
        </View>
    );
};

export default PropertyList;
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const PropertyList = ({ properties }) => {
    return (
        <View>
            <FlatList
                data={properties}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.location}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default PropertyList;
