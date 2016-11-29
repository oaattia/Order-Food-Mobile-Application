'use strict';

import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import {
    FormLabel,
    FormInput
} from 'react-native-elements'


var styles = require('../assets/style');

class RestaurantsDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }

    }

    render() {
        return (
            <View>
                <FormLabel>Name</FormLabel>
                <FormInput
                    returnKeyType={"next"}
                    ref="name"
                    autoFocus={true}
                    onChange={(name) => this.setState({name}) }
                />

                <FormLabel>Location</FormLabel>
                <FormInput
                    returnKeyType={"next"}
                    ref="location"
                    onChange={(location) => this.setState({location}) }
                />

            </View>
        );
    }
}

module.exports = RestaurantsDetails;