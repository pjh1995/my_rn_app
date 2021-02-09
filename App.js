/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './src/components/Header';
import Generator from './src/components/Generator';
import Numlist from './src/components/Numlist';

class App extends Component {
  state = {
    appName: 'MY_RN_APP',
    random: [28, 13],
  };

  onAddRandomNum = () => {
    alert('press random buttom');
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
        <Generator onAddRandomNum={this.onAddRandomNum} />
        <Numlist nums={this.state.random} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
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
});

export default App;
