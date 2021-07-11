import React from 'react';
import PropTypes from 'prop-types';
import {View, Card} from 'react-native-ui-lib';
import service from '../../services';

/**
 *  Dashboard Component
 */
const Dashboard = ({navigation}) => {
  const handlePress = async () => {
    const sets = await service('/sets/');
    console.log(sets.data.result);
  };

  return (
    <View flex>
      <Card
        borderRadius={15}
        margin={5}
        backgroundColor="coral"
        onPress={() => navigation.navigate('Workouts')}
      >
        <Card.Section
          center
          content={[{text: 'Workouts', text70: true, grey10: true}]}
          style={{padding: 20, height: 125, width: 125}}
        />
      </Card>
      <Card
        borderRadius={15}
        margin={5}
        backgroundColor="cyan"
        onPress={() => navigation.navigate('Sets')}
      >
        <Card.Section
          center
          content={[{text: 'Sets', text70: true, grey10: true}]}
          style={{padding: 20, height: 125, width: 125}}
        />
      </Card>
    </View>
  );
};

Dashboard.propTypes = {
  navigation: PropTypes.object,
};

export default Dashboard;
