import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {View, Text} from 'react-native-ui-lib';

import {AuthProvider} from './src/context/Auth';

export default function App() {
  return (
    <AuthProvider>
      <View center flex useSafeArea>
        <Text>Logged In</Text>
        <StatusBar style="auto" />
      </View>
    </AuthProvider>
  );
}
