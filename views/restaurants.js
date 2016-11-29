'use strict';

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

var styles = require('../assets/style');

class Restaurants extends Component {

  render() {
    return (
        <View style={styles.container}>
            <Text>We go here to order some food, we should have list of restaurants</Text>
        </View>
    );
  }
}

module.exports = Restaurants;