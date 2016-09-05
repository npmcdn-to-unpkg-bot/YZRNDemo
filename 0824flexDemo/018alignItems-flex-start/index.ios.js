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
        <Text style={[styles.instructions,{height: 100}]}>
          1
        </Text>
        <Text style={[styles.instructions,{height: 200}]}>
          2
        </Text>
        <Text style={[styles.instructions,{height: 80}]}>
          3
        </Text>
        <Text style={[styles.instructions,{height: 280}]}>
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
    alignItems: 'flex-start'
  },
  instructions: {
    width: 40,
    color: '#333333',
    backgroundColor: '#ABC',
    marginLeft: 20
  },
});

AppRegistry.registerComponent('YZDemo', () => YZDemo);
