/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {Root} from './src/App'

export default class MiniProject_2 extends Component {
  render() {
    return (
      <Root/>
    );
  }
}

AppRegistry.registerComponent('MiniProject_2', () => MiniProject_2);
