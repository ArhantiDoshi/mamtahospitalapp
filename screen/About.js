import React, { Component } from 'react';
import { View, StyleSheet, Text,ScrollView , SafeAreaView,
  Dimensions,} from "react-native";
import {Card, ListItem,Button,Image} from "react-native-elements";
import { CardViewWithImage } from 'react-native-simple-card-view';

import Icon from 'react-native-vector-icons/FontAwesome';


class About extends Component{
	
	render(){
		
  return (
<View>
 <Text> hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</Text>
 
  </View>

   
  );
}
}
const styles = StyleSheet.create({
	 separator: {
    height: 20,
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
	
  },
});


export default About;