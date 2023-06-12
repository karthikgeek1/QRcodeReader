import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from '../Screens/EntryScreen';
import QRscanner from '../Screens/QRscanner';

type Props = {}
const Stack = createNativeStackNavigator();

const Mainstack = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="EntryScreen"
          component={EntryScreen}
          options={{ headerShown: false }} // Hide the header for EntryScreen
        />
        <Stack.Screen
          name="QRscanner"
          component={QRscanner}
          options={{ headerShown: false }} // Hide the header for QRscanner
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Mainstack
