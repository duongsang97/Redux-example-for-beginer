/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: 0
        }
    }
    render() {
        return (
        <View style={styles.container}>
           <View style={styles.headerContainer}>
                <Text>Component <Text style={{ color: 'rgb(27, 92, 196)', fontSize: 20 }}>Screen 1</Text>
            </Text>
           </View>
           <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={()=>{
              this.props.dispatch({ type: 'DOWN' })
            }}
            >
            <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => {
                  this.props.dispatch({ type: 'UP' })
                }}
            >
            <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            </View>
        </View>
        );
    }
}
export default connect()(Screen1);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#992e20"
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
      justifyContent: 'space-between',
    padding: 15
  },
  buttonContainer: {
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 100,
    width: 100,
    padding: 15
  },
  buttonText: {
    color: "black",
    fontSize: 20
  }
});
