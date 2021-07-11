import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native-ui-lib';

import {AuthProvider} from './src/context/Auth';

import Dashboard from './src/routes/Dashboard';

export default function App() {
  return (
    <AuthProvider>
      <View center flex useSafeArea>
        <Dashboard />
        <StatusBar style="auto" />
      </View>
    </AuthProvider>
  );
}
