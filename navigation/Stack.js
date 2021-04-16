import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import Home from "../screen/Home";
import About from "../screen/About";
import Contact from "../screen/Contact";
import Reservation from "../screen/Appointment";
import Doctor from "../screen/Doctor";
import Fertility from "../screen/Fertility";


const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "white",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeCard" component={Home}
       options={{ 
     headerTitle: (props) => ( // App Logo
      <Image
        style={{ width: 200, height: 50, alignSelf:'center' }}
        source={require('../assets/mamtaheader.png')}
        resizeMode='contain'
        textAlign = 'center'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} />
      <Stack.Screen name="Appointment" component={Reservation} />
      
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};
const DoctorStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Doctor" component={Doctor} />
    </Stack.Navigator>
  );
};
const FertilityStackNavigator = () => {
return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Fertility" component={Fertility} />
    </Stack.Navigator>
  );
};
const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
const AppointmentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Appointmet" component={Reservation} />
    </Stack.Navigator>
  );
};
export { MainStackNavigator, ContactStackNavigator ,DoctorStackNavigator,AppointmentStackNavigator,FertilityStackNavigator,AboutStackNavigator};