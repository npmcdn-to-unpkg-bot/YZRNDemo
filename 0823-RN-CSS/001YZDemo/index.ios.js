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
          Learn once, write anywhere!
        </Text>
      </View>
    );
  }
}


const liyuechun = StyleSheet.create(
{
  yuzhi: {
    fontSize: 40,
    color: 'green',
    marginTop: 40,
    backgroundColor: 'blue'
  },

  liangxin: {
    fontSize: 80,
    backgroundColor: '#FFF',
    marginTop: 5
  },

  textFontSize: {
    fontSize: 20
  },
  textBGColor: {
    backgroundColor: '#F88'
  }


});




AppRegistry.registerComponent('YZDemo', () => YZDemo);







