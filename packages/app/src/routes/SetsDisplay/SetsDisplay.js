import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native-ui-lib';
import service from '../../services';

import NewSetModal from '../../components/NewSetModal';
import SetListItem from '../../components/SetListItem';
/**
 *  SetsDisplay Component
 */
const SetsDisplay = (props) => {
  const [setsList, setSetsList] = useState([]);
  const [showNewSetModal, setShowNewSetModal] = useState(true);

  const fetchSets = async () => {
    const {data} = await service('/sets/');
    setSetsList(data.results);
  };
  useEffect(() => {
    fetchSets();
  }, []);

  const handlePress = () => {
    setShowNewSetModal(true);
  };

  const handleNewSetSubmit = (values) => {
    console.log(values);
  };

  return (
    <View>
      {setsList.length === 0 ? (
        <Text margin-20 text50L>
          No sets. Please make one
        </Text>
      ) : (
        setsList.map((set) => <SetListItem key={set.id} setDetails={set} />)
      )}
      <Button label="Add New Set" onPress={handlePress} />
      <NewSetModal
        onCancel={() => setShowNewSetModal(false)}
        visible={showNewSetModal}
        onDone={handleNewSetSubmit}
      />
    </View>
  );
};

SetsDisplay.propTypes = {};

export default SetsDisplay;
