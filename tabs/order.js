'use strict';

import React, { Component } from 'react';

import {
    Text,
} from 'react-native';

import {
    TabLayoutAndroid,
    TabAndroid
} from "react-native-android-kit";

class OrderTab extends React.Component {

    render() {
        return (
            <TabLayoutAndroid style={{height:60}} backgroundColor='#009688' indicatorTabColor='#ffc400'
                              indicatorTabHeight={2} scrollable={false} center={false}>

                <TabAndroid text='يلا نطلب' textSize={16} textColor="white" selectedTextColor='#ffc400'
                            icon='ic_home_black_24dp' iconPosition='left'>

                    <Text>I'm the first Tab content!</Text>

                </TabAndroid>

            </TabLayoutAndroid>
        );
    }
}

export {
    OrderTab
}