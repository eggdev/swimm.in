import React, {useState} from 'react';

import {appleAuth} from '@invertase/react-native-apple-authentication';
import {View, Button} from 'react-native-ui-lib';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  if (isLoggedIn) {
    return props.children;
  }

  const onAppleButtonPress = async () => {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user
    );

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
      setIsLoggedIn({...appleAuthRequestResponse});
      // loginOrCreateUser()
    }
  };
  return (
    <View center flex>
      <Button
        label="Sign in with Apple"
        style={{
          width: 160, // You must specify a width
          height: 45, // You must specify a height
        }}
        onPress={() => onAppleButtonPress()}
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
