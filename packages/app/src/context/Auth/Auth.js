import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import {View, Text, TextField, Button} from 'react-native-ui-lib';

// Change this
import ENV from './.secret.json';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [userData, setUserData] = useState(null);
  const checkAuthStatus = async () => {
    const authResponse = await AsyncStorage.getItem('auth_response');
    if (authResponse) {
      // Make a request to Apple to get most recent user info
      // Then store it and set this to true
      // await AsyncStorage.removeItem('auth_response');
      // console.log(authResponse);
      // setUserData(null);
    } else {
      setUserData(null);
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

      console.log(appleAuthRequestResponse);
      setUserData({...appleAuthRequestResponse});
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (evt) => {
    setUsername(evt.nativeEvent.text);
  };

  const handlePassword = (evt) => {
    setPassword(evt.nativeEvent.text);
  };

  const handleLogin = async () => {
    const req = await fetch(`http://localhost:8000/auth/login/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: ENV.password,
      }),
    });
    const res = await req.json();

    console.log(res);
  };

  return userData ? (
    <AuthContext.Provider value={userData} {...props} />
  ) : (
    <View center flex>
      <Text text10>Swimm.in</Text>
      <Text text40L marginB-20>
        Login to start
      </Text>

      {/* <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.CONTINUE}
        style={{
          width: 160, // You must specify a width
          height: 45, // You must specify a height
        }}
        onPress={onAppleButtonPress}
      /> */}
      <TextField
        placeholder="username"
        value={username}
        onChange={handleUsername}
      />
      <TextField
        placeholder="password"
        onChange={handlePassword}
        value={password}
      />
      <Button label="login" onPress={handleLogin} />
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
