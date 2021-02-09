/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Numlist = (props) =>
  props.nums.map((num, i) => {
    return (
      <TouchableOpacity
        style={styles.numlist}
        key={i}
        onPress={() => props.onDelete(i)}>
        <Text>{num}</Text>
      </TouchableOpacity>
    );
  });

const styles = StyleSheet.create({
  numlist: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});

export default Numlist;
