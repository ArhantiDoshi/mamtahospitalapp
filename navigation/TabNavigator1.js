import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../screen/About";
import  MainStackNavigator from "./Stack1";
import { Ionicons } from '@expo/vector-icons';
import Profile from '../screen/Profile';
import Contact from '../screen/Contact';
import CreateEmployee from '../screen/CreateEmployee';
const Tab = createBottomTabNavigator();





const BottomTabNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={MainStackNavigator} />
	  <Tab.Screen name="About" component={CreateEmployee} />
	    <Tab.Screen name="Contact" component={Contact} iconName='ios-call' />
    
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;