import React from 'react';
import {View, Text, Button} from 'react-native-ui-lib';

// import {useAuth} from '../../context/Auth';

/**
 *  Dashboard Component
 */
const Dashboard = (props) => {
  // const data = useAuth();

  const handlePress = () => {
    console.log('pressed');
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
