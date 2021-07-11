import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthProvider} from './src/context/Auth';

import Dashboard from './src/routes/Dashboard';
import Workouts from './src/routes/Workouts';
import SetsDisplay from './src/routes/SetsDisplay';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Workouts" component={Workouts} />
          <Stack.Screen name="Sets" component={SetsDisplay} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </AuthProvider>
    </NavigationContainer>
  );
}
