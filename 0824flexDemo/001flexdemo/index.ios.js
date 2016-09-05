/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class YZDemo extends Component {
  render() {
    return (
      <View style={{flex: 1,backgroundColor: 'white'}}>
        <Text style={{flex: 1,backgroundColor: 'blue'}}>
          1
        </Text>
        <Text style={{flex: 1,backgroundColor: 'yellow'}}>
          2
        </Text>
        <Text style={{flex: 2,backgroundColor: 'gray'}}>
          3
        </Text>
        <Text style={{flex: 1,backgroundColor: 'red'}}>
          4
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('YZDemo', () => YZDemo);
