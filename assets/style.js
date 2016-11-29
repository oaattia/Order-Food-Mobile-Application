'use strict'

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        padding:20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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