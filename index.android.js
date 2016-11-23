import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View
} from 'react-native';

import {
    TabLayoutAndroid,
    TabAndroid
} from "react-native-android-kit";

var styles = require('./assets/style');

export default class breakfastapp extends Component {

    constructor(props) {
        super(props);
        this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    onPressLearnMore() {
        Alert.alert('رمضان اديني');
    }

  render() {
    return (
      <View>

          <TabLayoutAndroid style={{height:60}} backgroundColor='#009688' indicatorTabColor='#ffc400'
                            indicatorTabHeight={2} scrollable={false} center={false}>

              <TabAndroid text='Order' textSize={16} textColor="white" selectedTextColor='#ffc400'
                          icon='ic_home_black_24dp' iconPosition='left'>
                  <Text>I'm the first Tab content!</Text>
              </TabAndroid>

              <TabAndroid text='Restaurants' textSize={16} textColor='white' selectedTextColor='#ffc400'
                          icon='ic_important_devices_black_24dp' iconPosition='left'>
                  <Text>I'm the second Tab content!</Text>
              </TabAndroid>

          </TabLayoutAndroid>

      </View>
    );
  }
}

AppRegistry.registerComponent('breakfastapp', () => breakfastapp);
