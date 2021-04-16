import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./Stack";
import {AppointmentStackNavigator} from "./Stack";
import {FertilityStackNavigator} from "./Stack"

import BottomTabNavigator from "./TabNavigator1";
import Profile from "../screen/Profile1";
import Doctor from "../screen/Doctor";
import Reservation from "../screen/Appointment";
import CreateEmployee from "../screen/CreateEmployee";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
  <Drawer.Screen name="Home1" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
	    <Drawer.Screen name="Doctor" component={Doctor} />
      <Drawer.Screen name="Appointment" component={Reservation} />
      <Drawer.Screen name="Create" component={CreateEmployee} />
     
    
	</Drawer.Navigator>
  );
}

export default DrawerNavigator;