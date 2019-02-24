/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './src/components/Main';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const DefaultValues = {values:0};
const reducer = (state = DefaultValues,action) =>{
  if(action.type == 'UP')
  {
    return {values: state.values + 1};
  }
  if(action.type == 'DOWN')
  {
    return {values: state.values -1};
  }
  else
  {
    return state;
  }
};
const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <Main />
      </Provider>
    
    );
  }
}
