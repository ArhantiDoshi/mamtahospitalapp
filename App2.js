import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import HomeDisplay from'./screen/HomeDisplay';
 import Home from './screen/Home';
 import Profile from './screen/Profile1';
 import Doctor from './screen/Doctor';

 import MainStackNavigator from './navigation/Stack1';
 import BottomTabNavigator from './navigation/TabNavigator1';
 import DrawerNavigator from "./navigation/DrawerNavigator1";


 const Stack = createStackNavigator();
 const App = () => {
  return (
 <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}
     options={{ 
                headerTitle: (props) => ( 
                 <Image
                   style={{ width: 200, height: 50, alignSelf:'center' }}
                   source={require('./assets/mamtaheader.png')}
                   resizeMode='contain'
                   textAlign = 'center'
                 />
               ),
               headerTitleStyle: { flex: 1, textAlign: 'center' },
               }}  />
    <Stack.Screen name="Services" component={Profile} />
    
  </Stack.Navigator>
  </NavigationContainer>
   );
}


 export default App;