import React from 'react';
import {ListItem, Drawer, Text} from 'react-native-ui-lib';

/**
 *  SetListItem Component
 */
const SetListItem = (props) => {
  return (
    <ListItem containerElement={Drawer}>
      <ListItem.Part>
        <Text>Item</Text>
      </ListItem.Part>
    </ListItem>
  );
};

SetListItem.propTypes = {};

export default SetListItem;
