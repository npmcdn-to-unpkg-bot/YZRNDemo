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

import liyuechun from './styles'

var textStyle = {
  fontSize:15,
  backgroundColor:'#DAC',
  textAlign:'center'
};

class YZDemo extends Component {
  render() {
    return (
      <View style={
        {
          width: 300,
          height: 600,
          backgroundColor: 'red',
          padding: 50,
          margin: 10
        }
      }>

        <Text style={textStyle}>
          www.52learn.wang
        </Text>  

        <Text style={liyuechun.yuzhi}>
          匠心品质
        </Text>

        <Text style={liyuechun.liangxin}>
          良心育人
        </Text>

        <Text style={[liyuechun.textFontSize, liyuechun.textBGColor]}>
          黎跃春
        </Text>

        <Text style={[liyuechun.textFontSize, {backgroundColor: 'yellow'}]}>
          欢迎大家来到育知同创
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('YZDemo', () => YZDemo);







