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

export default class breakfastapp extends Component {

  constructor(props) {
      super(props);
      this.renderRestaurantsOrder = this.renderRestaurantsOrder.bind(this);
  }

  renderRestaurantsOrder() {
    this.props.navigator.push({
      title: 'restaurants',
      component: require('./views/view.js')
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Button
            title="اطلب من المحل"
            onPress={() => this.renderRestaurantsOrder()}
          />

          <Button
            title="بيانات"
            onPress={() => this.renderRestaurantsOrder()}
          />

      </View>
    );
  }
}

AppRegistry.registerComponent('breakfastapp', () => breakfastapp);
