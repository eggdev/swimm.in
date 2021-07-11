import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import {View} from 'react-native-ui-lib';

const AuthContext = React.createContext();

function AuthProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const checkAuthStatus = async () => {
    const authResponse = await AsyncStorage.getItem('auth_response');
    if (authResponse) {
      // Make a request to Apple to get most recent user info
      // Then store it and set this to true
      setIsLoggedIn(null);
      // setIsLoggedIn(authResponse);
    } else {
      setIsLoggedIn(null);
    }
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

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
      // Create new user account in db, it's going to pretty much only be their ID right?
      await AsyncStorage.setItem(
        'auth_response',
        JSON.stringify(appleAuthRequestResponse)
      );
      setIsLoggedIn({...appleAuthRequestResponse});
    }
  };

  return isLoggedIn ? (
    children
  ) : (
    <View center flex>
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

AuthProvider.propTypes = {
  children: PropTypes.object,
};

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export {AuthContext, AuthProvider, useAuth};
