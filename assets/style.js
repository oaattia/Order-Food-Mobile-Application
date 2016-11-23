'use strict'

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: 'red',
        width:70,
        paddingTop: 20,
        paddingBottom: 20,
    },
    welcome: {
        fontSize: 23,
        textAlign: 'center',
        marginBottom: 20,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


module.exports = styles;