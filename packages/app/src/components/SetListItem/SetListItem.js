import React from 'react';
import {ListItem, Drawer, Text} from 'react-native-ui-lib';

/**
 *  SetListItem Component
 */
const SetListItem = ({set}) => {
  console.log();
  return (
    <ListItem>
      <ListItem.Part>
        <Text>
          {set.repetitions} x {set.distance} @ {set.interval}
        </Text>
      </ListItem.Part>
    </ListItem>
  );
};

SetListItem.propTypes = {};

export default SetListItem;
