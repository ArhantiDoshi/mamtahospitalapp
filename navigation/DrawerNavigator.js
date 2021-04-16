import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./Stack";
import {AppointmentStackNavigator} from "./Stack";
import {FertilityStackNavigator} from "./Stack"

import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
  <Drawer.Screen name="Home1" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
	    <Drawer.Screen name="Appointment" component={AppointmentStackNavigator} />
    <Drawer.Screen name=" " component={FertilityStackNavigator} />
    
	</Drawer.Navigator>
  );
}

export default DrawerNavigator;