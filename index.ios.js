/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
//var SunCalc = require('suncalc');

import sunriseStr from './test'

export default class SunsetApp extends Component {
  render() {
    return (

        <Image source={require('./Pictures/background.jpg')}
                style={styles.container}>
        <Text style={styles.sunsetTime}>
          {sunriseStr}
        </Text>
        <Text style={styles.instructions}>
          Pollution causes those prettier sunsets.
        </Text>
        </Image>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  sunsetTime: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SunsetApp', () => SunsetApp);
