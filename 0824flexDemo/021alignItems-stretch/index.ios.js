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
      <View style={styles.container}>
        <Text style={styles.instructions}>
          1
        </Text>
        <Text style={styles.instructions}>
          2
        </Text>
        <Text style={styles.instructions}>
          3
        </Text>
        <Text style={styles.instructions}>
          4
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch'
  },
  instructions: {
    width: 40,
    color: '#333333',
    backgroundColor: '#ABC',
    margin: 20
  },
});

AppRegistry.registerComponent('YZDemo', () => YZDemo);
