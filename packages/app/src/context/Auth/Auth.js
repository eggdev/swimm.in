import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import {View, Text, TextField, Button} from 'react-native-ui-lib';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [userData, setUserData] = useState(null);

  const checkAuthStatus = async () => {
    const user = await AsyncStorage.getItem('user');
    setUserData(user);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const onAppleButtonPress = async () => {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user
    );

    // console.log(appleAuthRequestResponse);

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
      // Create new user account in db, it's going to pretty much only be their ID right?
      await AsyncStorage.setItem(
        'auth_response',
        JSON.stringify(appleAuthRequestResponse)
      );

      console.log(appleAuthRequestResponse);
      setUserData({...appleAuthRequestResponse});
    }
  };

  // return <AuthContext.Provider value={userData} {...props} />;
  return userData ? (
    <AuthContext.Provider value={userData} {...props} />
  ) : (
    <View center flex>
      <Text text10>Swimm.in</Text>
      <Text text40L marginB-20>
        Login to start
      </Text>

      <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.CONTINUE}
        style={{
          width: 160, // You must specify a width
          height: 45, // You must specify a height
        }}
        onPress={onAppleButtonPress}
      />
    </View>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export {AuthContext, AuthProvider, useAuth};
