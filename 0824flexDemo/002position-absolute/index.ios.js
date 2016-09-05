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
        <Text style={[styles.smallView1,styles.base]}>
          1
        </Text>
        <Text style={[styles.smallView2,styles.base]}>
          2
        </Text>
        <Text style={[styles.smallView3,styles.base]}>
          3
        </Text>
        <Text style={[styles.smallView4,styles.base]}>
          4
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    base: {
        position: 'absolute',
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
    smallView1: {
        left: 20,
        top: 20
    },
    smallView2: {
        top: 20,
        right: 20
    },
    smallView3: {
        left: 20,
        bottom: 20
    },
    smallView4: {
        right: 20,
        bottom: 20
    },
});


AppRegistry.registerComponent('YZDemo', () => YZDemo);
