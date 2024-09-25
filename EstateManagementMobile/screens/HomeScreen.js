import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const goToProperties = () => {
        navigation.navigate('PropertyList');
    };

    return (
        <View>
            <Text>Welcome to the Estate Management App</Text>
            <Button title="View Properties" onPress={goToProperties} />
        </View>
    );
};

export default HomeScreen;
