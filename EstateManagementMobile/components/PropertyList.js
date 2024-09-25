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
