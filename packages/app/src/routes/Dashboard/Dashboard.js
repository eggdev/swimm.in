import React from 'react';
import {View, Text, Button} from 'react-native-ui-lib';

import {useAuth} from '../../context/Auth';

/**
 *  Dashboard Component
 */
const Dashboard = () => {
  const data = useAuth();

  const handlePress = async () => {
    await fetch(`http://localhost:8000/auth/`, {
      method: 'POST',
      'Content-Type': 'application/json',
      ...data,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <View center>
      <Text text10 marginB-20>
        Dashboard
      </Text>
      <Button label="Click For Login" onPress={handlePress} />
    </View>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
