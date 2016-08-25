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

class MyFlex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.topLeft}>
            <View style={[{flex: 1,backgroundColor: '#123456'},styles.base]}/>
            <View style={[{flex: 2,backgroundColor: '#654321'},styles.base]}/>
          </View>
          <View style={[styles.topRight, styles.base]}/>
        </View>
        <View style={styles.bottomView}>
          <View style={[{flex: 1, backgroundColor: '#222222'},styles.base]} />
          <View style={[{flex: 1, backgroundColor: '#333333'},styles.base]}/>
          <View style={[{flex: 2, backgroundColor: '#444444'},styles.base]}>
            <View style={[{flex: 1, backgroundColor: '#555555'}, styles.base]}/>
            <View style={[{flex: 2, backgroundColor: '#666666'}, styles.base]}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#999999',
  },
  topView: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'yellow'
  },
  bottomView: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'green'
  },
  topLeft: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'blue'
  },
  topRight: {
    flex: 3,
    backgroundColor: 'red'
  },
  base: {
    margin: 5,
    borderWidth: 2,
    borderColor: 'black'
  }
});

AppRegistry.registerComponent('MyFlex', () => MyFlex);




