/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Screen1 from './screen1';
import {connect} from 'react-redux';
class Main extends Component {
constructor(props)
{
    super(props);
    this.state={
        values:0
    }
}
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                    <Text style={{ color: 'white', padding: 10 }}>Component  <Text style={{ color: 'red', fontSize: 20 }}>Main</Text></Text>
                    <Text style={{color:'yellow',fontSize:30}}>{this.props.myValues}</Text>
              </View>
              <View style={styles.footerContainer}>
                    <Screen1/>
              </View>
            </View>
        );
    }
}
function mapStateToProps(state){
    return {myValues : state.values};
}
export default connect(mapStateToProps)(Main);
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: "#000000"
  },
  headerContainer:{
      justifyContent: "center",
      alignItems: "center",
    flex:1,
  },
  footerContainer:{
      flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
