'use strict';
import React, {
    StyleSheet,
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width - 50;


module.exports = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1976D2',
    },
    inputcontainer: {
        marginTop: 50,
        borderRadius: 20,
        backgroundColor: '#82B1FF'
    },
    input: {
        width: width,
        margin: 5
    },
    profileText:{
        alignSelf:'flex-start'
    },
    textbutton: {
        color: '#FAFAFA',
        padding:5,
        borderWidth:2,
        borderRadius: 10,
        borderColor: 'steelblue',
        textAlign: 'center',
    },
    buttoncontainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    button: {
        marginRight: 40,
    },
})