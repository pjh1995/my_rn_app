/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Generator = (props) => (
  <View style={styles.generator}>
    <Button title="Add number" onPress={() => props.onAddRandomNum()} />
  </View>
);

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
