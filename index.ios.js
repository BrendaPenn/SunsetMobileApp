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
import MapView from 'react-native-maps'

import sunriseStr from './test'

export default class SunsetApp extends Component {
  render() {
    return (

        <Image source={require('./Pictures/background.jpg')}
                style={styles.container}>
        <Text style={styles.regular}>
           The sun sets tonight at:
        </Text>


        <Text style={styles.sunsetTime}>
           {sunriseStr}
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
    marginTop: 40,
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,

  },
  regular: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    marginTop: 200,
    fontWeight: 'bold'

  }
});

AppRegistry.registerComponent('SunsetApp', () => SunsetApp);
