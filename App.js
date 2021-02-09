/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';

// import Header from './src/components/Header';
// import Generator from './src/components/Generator';
// import Numlist from './src/components/Numlist';
import Input from './src/components/Input';
import Picker from './src/components/Picker';

class App extends Component {
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c'],
  };

  onChangeInput = (v) => {
    this.setState({myTextInput: v});
  };

  onAddTextInput = () => {
    this.setState((prev) => {
      return {
        alphabet: [...prev.alphabet, prev.myTextInput],
        myTextInput: '',
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Picker />
        <Input
          style={styles.Input}
          onChange={this.onChangeInput}
          value={this.state.myTextInput}
        />
        <Button title="Add Text Input" onPress={this.onAddTextInput} />
        <ScrollView style={styles.ScrollView}>
          {this.state.alphabet.map((item, idx) => (
            <Text key={idx} style={styles.mainText}>
              {item}
            </Text>
          ))}
        </ScrollView>
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
    margin: 20,
    backgroundColor: 'pink',
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
