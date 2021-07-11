import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Modal, Text, View, SectionsWheelPicker} from 'react-native-ui-lib';

/**
 *  NewSetModal Component
 */
const NewSetModal = ({
  onCancel = () => {},
  visible = false,
  onDone = () => {},
}) => {
  const defaultNewSetValues = {
    repetitions: 5,
    distance: 50,
    stroke: '',
    interval: 60,
    equipment: [],
  };
  const [newSetValues, setNewSetValues] = useState(defaultNewSetValues);

  const handleCancel = () => {
    setNewSetValues(defaultNewSetValues);
    onCancel();
  };

  const handleDone = () => {
    onDone(newSetValues);
  };

  const handleWheelChange = (key, value) => {
    setNewSetValues({
      ...newSetValues,
      [key]: value,
    });
  };

  const getIntervalItems = () => {
    const fullList = [
      {label: ':15', value: 15, maxDistance: 25},
      {label: ':20', value: 20, maxDistance: 50},
      {label: ':25', value: 25, maxDistance: 50},
      {label: ':30', value: 30, maxDistance: 50},
      {label: ':35', value: 35, maxDistance: 50},
      {label: ':40', value: 40, maxDistance: 100},
      {label: ':45', value: 45, maxDistance: 100},
      {label: ':50', value: 50, maxDistance: 100},
      {label: ':55', value: 55, maxDistance: 100},
      {label: '1:00', value: 60, maxDistance: 100},
    ];

    return fullList.filter((item) => item.maxDistance > newSetValues.distance);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <Modal.TopBar
        onCancel={handleCancel}
        title="New Set"
        doneLabel="Done"
        onDone={handleDone}
      />
      <View marginT-10 padding-20>
        <SectionsWheelPicker
          sections={[
            {
              // Generate items for each section on the backend
              items: [
                {label: '1', value: 1},
                {label: '2', value: 2},
                {label: '3', value: 3},
                {label: '4', value: 4},
                {label: '5', value: 5},
                {label: '6', value: 6},
                {label: '7', value: 7},
                {label: '8', value: 8},
                {label: '9', value: 9},
                {label: '10', value: 10},
              ],
              onChange: (value) => handleWheelChange('repetitions', value),
              selectedValue: newSetValues.repetitions,
              label: 'reps',
            },
            {
              items: [
                {label: '25', value: 25},
                {label: '50', value: 50},
                {label: '75', value: 75},
                {label: '100', value: 100},
                {label: '200', value: 200},
                {label: '300', value: 300},
                {label: '400', value: 400},
                {label: '500', value: 500},
              ],
              onChange: (value) => handleWheelChange('distance', value),
              selectedValue: newSetValues.distance,
              label: 'yds',
            },
            {
              // Filter these items based on the selected distance
              items: getIntervalItems(),
              onChange: (value) => handleWheelChange('interval', value),
              selectedValue: newSetValues.interval,
              label: 'time',
            },
          ]}
        />
      </View>
    </Modal>
  );
};

NewSetModal.propTypes = {
  onCancel: PropTypes.func,
  visible: PropTypes.bool,
  onDone: PropTypes.func,
};

export default NewSetModal;
