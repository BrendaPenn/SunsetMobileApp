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
var SunCalc = require('suncalc');

export default class SunsetApp extends Component {
  state = {
     mapRegion: null,
     lastLat: null,
     lastLong: null,
   }

   componentDidMount() {
     this.watchID = navigator.geolocation.watchPosition((position) => {
       // Create the object to update this.state.mapRegion through the onRegionChange function
       let region = {
         latitude:       position.coords.latitude,
         longitude:      position.coords.longitude,
         latitudeDelta:  0.00922*1.5,
         longitudeDelta: 0.00421*1.5
       }
       this.onRegionChange(region, region.latitude, region.longitude);
     });
   }

   onRegionChange(region, lastLat, lastLong) {
     this.setState({
       mapRegion: region,
       // If there are no new values set use the the current ones
       lastLat: lastLat || this.state.lastLat,
       lastLong: lastLong || this.state.lastLong
     });
   }

   componentWillUnmount() {
     navigator.geolocation.clearWatch(this.watchID);
   }

   onMapPress(e) {
     console.log(e.nativeEvent.coordinate.longitude);
     let region = {
       latitude:       e.nativeEvent.coordinate.latitude,
       longitude:      e.nativeEvent.coordinate.longitude,
       latitudeDelta:  0.00922*1.5,
       longitudeDelta: 0.00421*1.5
     }
     this.onRegionChange(region, region.latitude, region.longitude);
   }
  render() {
    return (
      <Image source={require('./Pictures/background.jpg')}
              style={styles.container}>
     <MapView
       style={styles.map}
       region={this.state.mapRegion}
       showsUserLocation={true}
       followUserLocation={true}
       onRegionChange={this.onRegionChange.bind(this)}
       onPress={this.onMapPress.bind(this)}>
       <MapView.Marker
         coordinate={{
           latitude: (this.state.lastLat + 0.00050) || -36.82339,
           longitude: (this.state.lastLong + 0.00050) || -73.03569,
         }}>
         <View>
           <Text style={{color: '#000'}}>
             { this.state.lastLong } / { this.state.lastLat }
           </Text>
         </View>
       </MapView.Marker>
     </MapView>



        <Text style={styles.regular}>
           The sun sets tonight at:
        </Text>
        <Text style={styles.sunsetTime}>
          {((SunCalc.getTimes(new Date(), this.state.lastLat, this.state.lastLong).sunsetStart.getHours() - 12) + ':' + (SunCalc.getTimes(new Date(), this.state.lastLat, this.state.lastLong).sunset.getMinutes() + 'pm'))}
        </Text>

        <Text>
          {this.state.lastLat + 0.00050}
        </Text>
        <Text>
          {this.state.lastLong + 0.00050}
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
