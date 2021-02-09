/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, Modal} from 'react-native';

class ModalComponent extends Component {
  state = {
    open: false,
  };
  handleModal = () => {
    this.setState((prev) => {
      return {
        open: !prev.open,
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Open Modal" onPress={this.handleModal} />
        <Modal
          visible={this.state.open}
          animationType={'slide'}
          onShow={() => alert('gg')}>
          <View style={styles.modal}>
            <Text>this is modal</Text>
          </View>
          <Button title="Go Back" onPress={this.handleModal} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modal: {
    marginTop: 300,
    backgroundColor: 'red',
  },
});

export default ModalComponent;
