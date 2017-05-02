'use strict';

import {
    StackNavigator, TabNavigator
} from 'react-navigation';

import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import ListData from './components/ListData'

export const Tab = TabNavigator({
    Home: {screen: Home},
    ListData: {screen: ListData},
});

export const Root = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions:{
            title:'Login'
        }
    },
    Tab:{
        screen: Tab,
        navigationOptions:{
            header:null
        }
    },
    Register:{
        screen: Register,
        navigationOptions:{
            title:'Register'
        }
    }
});






