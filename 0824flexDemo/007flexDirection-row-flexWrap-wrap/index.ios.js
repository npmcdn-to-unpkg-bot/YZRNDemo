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
                <Text style={styles.text}>1</Text>
                <Text style={styles.text}>2</Text>
                <Text style={styles.text}>3</Text>
                <Text style={styles.text}>4</Text>
                <Text style={styles.text}>5</Text>
                <Text style={styles.text}>6</Text>
                <Text style={styles.text}>7</Text>
                <Text style={styles.text}>8</Text>
                <Text style={styles.text}>9</Text>
                <Text style={styles.text}>10</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        margin: 5
    }
});

AppRegistry.registerComponent('YZDemo', () => YZDemo);
