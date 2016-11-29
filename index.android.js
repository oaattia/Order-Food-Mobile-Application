import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  ScrollView,
  View
} from 'react-native';

// import {
  // Button
// } from 'react-native-elements'

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Restaurant from './views/restaurants';
import RestaurantDetails from './views/restaurants_details';

var styles = require('./assets/style');

export default class breakfastapp extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
        <ScrollableTabView
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
        >
            <ScrollView tabLabel='أماكن أكل'>
               <Restaurant />
            </ScrollView>

            <ScrollView tabLabel='دخل مطعم'>
                <RestaurantDetails />
            </ScrollView>

        </ScrollableTabView>
    );
  }
}

AppRegistry.registerComponent('breakfastapp', () => breakfastapp);
