'use strict'

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F5FCFF',
    },
    image: {
        paddingTop: 520,
    },
    buttons: {
        marginBottom: 10,
        marginTop: 20,
        padding: 50,
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