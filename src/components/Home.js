import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import style from '../styles/style'

export default class Home extends Component {

    render() {
        // const {state} = this.props.navigation
        return (
            <View>
                <Text style={style.profileText}>Luthfan</Text>
            </View>
        )
    }
}