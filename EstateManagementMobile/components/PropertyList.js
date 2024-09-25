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
