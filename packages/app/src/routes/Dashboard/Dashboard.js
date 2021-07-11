import React from 'react';
import {View, Text, Button} from 'react-native-ui-lib';
import service from '../../services';

/**
 *  Dashboard Component
 */
const Dashboard = () => {
  const handlePress = async () => {
    const sets = await service('/sets/');
    console.log(sets.data.result);
  };

  return <View></View>;
};

Dashboard.propTypes = {};

export default Dashboard;
