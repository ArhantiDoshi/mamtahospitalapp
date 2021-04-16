import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import Home from "../screen/Home";
import Doctor from "../screen/Doctor";
import Profile from "../screen/Profile1";
import Reservation from "../screen/Appointment";
import CreateEmployee from "../screen/CreateEmployee";
//import HomeDisplay from "../screen/HomeDisplay";


//import Fertility from "../screen/Fertility";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
       options={{ 
        headerTitle: (props) => ( 
         <Image
           style={{ width: 200, height: 50, alignSelf:'center' }}
           source={require('../assets/mamtaheader.png')}
           resizeMode='contain'
           textAlign = 'center'
         />
       ),
       headerTitleStyle: { flex: 1, textAlign: 'center' },
       }} />
      <Stack.Screen name="Services" component={Profile} options={{ 
        headerTitle: (props) => ( 
         <Image
           style={{ width: 200, height: 50, alignSelf:'center' }}
           source={require('../assets/mamtaheader.png')}
           resizeMode='contain'
           textAlign = 'center'
         />
       ),
       headerTitleStyle: { flex: 1, textAlign: 'center' },
       }} />
      
      <Stack.Screen name="Doctor" component={Doctor} />
      <Stack.Screen name="Apponiment" component={Reservation} />
      <Stack.Screen name="CreateEmployee" component={CreateEmployee} />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;