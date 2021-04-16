import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../screen/About";
import { MainStackNavigator, ContactStackNavigator ,AboutStackNavigator,AppointmentStackNavigator,FertilityStackNavigator} from "./Stack";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();





const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "ios-home";

                    if(route.name === 'Home1') {
                    }
                    else if (route.name === 'About') {
                        iconName = 'ios-list';
                    } else if (route.name === 'Contact') {
                        iconName = 'ios-call';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                

            })}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
	  <Tab.Screen name="About" component={AboutStackNavigator} />
	    <Tab.Screen name="Appontment  " component={AppointmentStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} iconName='ios-call'/>
	   <Tab.Screen name="Fertility" component={FertilityStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;