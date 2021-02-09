/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// import Header from './src/components/Header';
// import Generator from './src/components/Generator';
// import Numlist from './src/components/Numlist';
// import Input from './src/components/Input';
// import Picker from './src/components/Picker';
// import doan from './src/assets/images/doan.png';

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
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          }}
        />
        {/* <Image
          // source={{uri: 'http://reactnative.dev/docs/assets/p_cat1.png'}}
          source={require('./src/assets/images/doan.png')}
          style={styles.image}
          resizeMode="contain"
          onLoadStart={() => alert('onLoadStart')}
          onLoadEnd={() => alert('onLoadEnd')}
          onError={(e) => alert('errerer')}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor: 'red',
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
  image: {
    width: 300,
    height: 700,
    // backgroundColor: 'red',
    resizeMode: 'contain',
    borderWidth: 2,
  },
});

export default App;
