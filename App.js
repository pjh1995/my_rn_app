/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Header from './src/components/Header';
import Generator from './src/components/Generator';
import Numlist from './src/components/Numlist';
import Input from './src/components/Input';

class App extends Component {
  state = {
    appName: 'MY_RN_APP',
    random: [28, 13],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState((prev) => {
      return {random: [...prev.random, randomNum]};
    });
  };

  onNumDelete = (idx) => {
    const newRandom = this.state.random.filter((num, i) => i !== idx);
    this.setState({
      random: [...newRandom],
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName} />
        <View>
          <Text style={styles.mainText} onPress={() => alert('Hello world')}>
            Hello world
          </Text>
        </View>
        <Generator onAdd={this.onAddRandomNum} />
        <ScrollView style={styles.ScrollView}>
          <Numlist nums={this.state.random} onDelete={this.onNumDelete} />
        </ScrollView>
        <Input style={styles.Input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
  ScrollView: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
  },
  Input: {
    // justifyContent: 'center',
  },
});

export default App;
