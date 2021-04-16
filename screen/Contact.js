import React from "react";
import { View, StyleSheet, Text,Linking,Platform } from "react-native";
import {Card, ListItem,Button,Image} from "react-native-elements";

import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons,Entypo} from '@expo/vector-icons';

const Contact = () => {

	const openDial=()=>{
		if(Platform.OS === "android"){
		   Linking.openURL("tel:9979506296")
		}else{
		   Linking.openURL("telprompt:9979506296")
		}
	}
		
  return (
  
<View felx Top style={{ flex: 1 ,flexDirection:'column',paddingTop:0}}>
	  <Image source={require('../assets/mamtaimg6.png')}
	  style={{width:350, height:200,justifyContent: 'center'}}	  />
	  
      <Card style={{padding: 10, margin: 10}}>
	  
	  <Text style={{fontWeight: "bold"}}><Icon size={15}     name="map-marker"/>Address: </Text>
	  <Text>4th Floor, Royal Platinum Complex,</Text>
	  <Text>Palanpurgam school Ugat Canal Road near L.P.Savani, </Text>
					<Text>Palanpur, Surat, Gujarat 395005</Text>
	</Card>


	<Card style={styles.mycard}  onPress={()=>openDial()} >
	<Text style={{fontWeight: "bold"}}><MaterialIcons size={15}     name="phone"/>Contact: </Text>
            
            <Text style={styles.mytext}>9979506296</Text>
           
			</Card>
		
	<Card>
	<Text style={{fontWeight: "bold"}}><Icon size={15}     name="envelope-o"/>Email: </Text>
	<Text>arhanti.shah@gmail.com</Text>
	
	</Card>
	<Card>
	<Text><Icon size={15}     name="facebook-square"/>  FACEBOOK Link </Text>
	    <Text><Icon size={15} name="instagram" />   INSTAGRAM Link </Text>
		<Text><Icon size={15}     name="twitter-square" />   TWITTER Link </Text>
		<Text><Icon size={15}     name="whatsapp" />   TWITTER Link </Text>
        
      </Card>
	   
    

</View>

    
	  
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
	
  },
  cardContent:{
    flexDirection:"row",
    padding:8
}
});


export default Contact;