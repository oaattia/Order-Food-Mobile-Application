import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  View
} from 'react-native';

// import {
  // Button
// } from 'react-native-elements'

var styles = require('./assets/style');

export default class view extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is another view</Text>
      </View>
    );
  }
}

