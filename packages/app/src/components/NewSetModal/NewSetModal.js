import React from 'react';
import {Modal, Text} from 'react-native-ui-lib';

/**
 *  NewSetModal Component
 */
const NewSetModal = (props) => {
  return (
    <Modal animationType="slide" visible={true}>
      <Modal.TopBar
        onCancel={() => console.log('cancel')}
        title="New Set"
        doneLabel="Done"
        onDone={() => console.log('done')}
      />
      <Text>Text</Text>
    </Modal>
  );
};

NewSetModal.propTypes = {};

export default NewSetModal;
