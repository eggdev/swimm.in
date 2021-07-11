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

  const fetchSets = async () => {
    const {data} = await service('/sets/');
    setSetsList(data.results);
  };
  useEffect(() => {
    fetchSets();
  }, []);

  return (
    <View>
      {setsList.length === 0 ? (
        <Text margin-20 text50L>
          No sets. Please make one
        </Text>
      ) : (
        setsList.map((set) => <SetListItem key={set.id} setDetails={set} />)
      )}
      <Button label="Add New Set" />
      <NewSetModal />
    </View>
  );
};

SetsDisplay.propTypes = {};

export default SetsDisplay;
