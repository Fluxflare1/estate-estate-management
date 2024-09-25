import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        SplashScreen.hide();  // Hides the splash screen after loading
    }, []);

    return (
        <NavigationContainer>
            {/* Define your screens here */}
        </NavigationContainer>
    );
};

export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PropertyList from './components/PropertyList';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="PropertyList" component={PropertyList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
