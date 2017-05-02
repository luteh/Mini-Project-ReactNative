import React, {Component} from 'react';
import {
    Alert,
    AppRegistry,
    Text,
    ToastAndroid,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
// import * as firebase from 'firebase'
import style from '../styles/style'

export default class Register extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         email: "",
    //         password: "",
    //         confirmPass:'',
    //         response: ""
    //     };
    //
    //     this.signup = this.signup.bind(this);
    //     // this.login = this.login.bind(this);
    // }
    //
    // async signup() {
    //     try {
    //         await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    //         this.setState({
    //             response: "account created"
    //         });
    //         setTimeout(() => {
    //             this.props.navigation.goBack()
    //         }, 1500);
    //     } catch (error) {
    //         this.setState({
    //             response: error.toString()
    //         })
    //     }
    // }

    redirect() {
        ToastAndroid.showWithGravity('Berhasil !', ToastAndroid.SHORT, ToastAndroid.CENTER);
        // alert('Berhasil')
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.inputcontainer}>
                    <TextInput style={style.input}
                               placeholder={'Email'}
                               onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput style={style.input}
                               placeholder={'Password'}
                               secureTextEntry={true}
                               onChangeText={(password) => this.setState({password})}
                    />
                    <TextInput style={style.input}
                               placeholder={'Confirm Password'}
                               secureTextEntry={true}
                               onChangeText={(confirmPass) => this.setState({confirmPass})}
                    />
                    <View style={style.buttoncontainer}>
                        <TouchableOpacity style={style.button}
                                            onPress={this.redirect.bind(this)}>
                            <Text style={style.textbutton}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}