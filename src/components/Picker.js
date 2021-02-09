/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {
  state = {
    country: 'Canada',
    value: 50,
  };

  onPickerChange = (v) => {
    this.setState({country: v});
  };

  onSliderChange = (v) => {
    this.setState({value: v});
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          onValueChange={this.onSliderChange}
          maximumTrackTintColor={'red'}
          minimumTrackTintColor={'blue'}
          step={10}
        />
        <Text>{this.state.value}</Text>
        <ActivityIndicator size="large" color="green" animating={true} />
        <Picker
          style={styles.picker}
          selectedValue={this.state.country}
          onValueChange={this.onPickerChange}>
          <Picker.Item label="Korea" value="Korea" />
          <Picker.Item label="Canada" value="Canada" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  picker: {
    width: 250,
    height: 50,
  },
  slider: {
    width: 300,
    height: 40,
  },
});

export default PickerComponent;
