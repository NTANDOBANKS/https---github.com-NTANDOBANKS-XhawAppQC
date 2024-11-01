import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen'; 
import SecondScreen from './SecondScreen'; 
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
import FifthScreen from './FifthScreen';
import SixthScreen from './SixthScreen';
import SeventhScreen from './SeventhScreen';
import EighthScreen from './EightScreen';

const Stack = createNativeStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen name="FourthScreen" component={FourthScreen} />
        <Stack.Screen name="FifthScreen" component={FifthScreen} />
        <Stack.Screen name="SixthScreen" component={SixthScreen} />
        <Stack.Screen name="SeventhScreen" component={SeventhScreen} />
        <Stack.Screen name="EighthScreen" component={EighthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
