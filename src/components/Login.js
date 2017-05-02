import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import style from '../styles/style'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            nama: 'Luthfan',
            posisi: 'Guitarist'
        }
    }
    redirect(route) {
        this.props.navigation.navigate(route)
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.inputcontainer}>
                    <TextInput style={style.input}
                               placeholder={'Email'}
                    />
                    <TextInput style={style.input}
                               placeholder={'Password'}
                               secureTextEntry={true}
                    />
                    <View style={style.buttoncontainer}>
                        <TouchableOpacity style={style.button}
                                            onPress={this.redirect.bind(this, 'Tab')}>
                            <Text style={style.textbutton}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.button}
                        onPress={this.redirect.bind(this, 'Register')}>
                            <Text style={style.textbutton}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}



