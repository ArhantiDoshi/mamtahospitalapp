import React from "react";
import { View, StyleSheet, Text,ScrollView,Modal,Alert,KeyboardAvoidingView } from "react-native";
import {Card, ListItem,Button,Image} from "react-native-elements";
import { CardViewWithImage } from 'react-native-simple-card-view';
//import * as ImagePicker from 'expo-image-picker';
//import * as Permissions from 'expo-permissions';

import Icon from 'react-native-vector-icons/FontAwesome';

// const pickFromGallery =async()=>{
//   const {granted}=await Permissions.askAsync(Permissions.CAMERA)
//   if(granted){
//     let data =  await ImagePicker.launchCameraAsync({
//          mediaTypes:ImagePicker.MediaTypeOptions.Images,
//          allowsEditing:true,
//          aspect:[1,1],
//          quality:0.5
//      })
//    if(!data.cancelled){
//        let newfile = { 
//          uri:data.uri,
//          type:`test/${data.uri.split(".")[1]}`,
//          name:`test.${data.uri.split(".")[1]}` 

//      }
//        handleUpload(newfile)
//    }
// }else{
//   Alert.alert("you need to give up permission to work")
// }
// }
// const pickFromCamera = async ()=>{
//   const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
//   if(granted){
//        let data =  await ImagePicker.launchCameraAsync({
//             mediaTypes:ImagePicker.MediaTypeOptions.Images,
//             allowsEditing:true,
//             aspect:[1,1],
//             quality:0.5
//         })
//       if(!data.cancelled){
//           let newfile = { 
//             uri:data.uri,
//             type:`test/${data.uri.split(".")[1]}`,
//             name:`test.${data.uri.split(".")[1]}` 

//         }
//           handleUpload(newfile)
//       }
//   }else{
//      Alert.alert("you need to give up permission to work")
//   }
// }
const Fertility = () => {
  return (
  <ScrollView>
<View felx Top style={{ flex: 1 , alignItems: 'center',flexDirection:'column',paddingTop:0}}>
{/* <Button  title="Go to About"
             style={styles.inputStyle}
             mode="contained" 
              theme={theme}
              onPress={() => updateDetails()}>
              
             </Button> */}
             
             {/* <Button 
              title="Go to About"
             style={styles.inputStyle}
             icon="content-save"
              mode="contained" 
              theme={theme}
              onPress={() => submitData()}>
                   
             </Button> */}
	  <Image source={require('../assets/fertlityimg.png')}
	  style={{width:350, height:200,justifyContent: 'center'}}	  />
	  
     <Card>
	 <Card.Title style={{color:'pink', fontWeight:'bold', fontSize:16}}>Fertility Solution</Card.Title>
        <Text>When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.</Text> 
		<Text style={{color:'pink',fontSize:20}}>Contact us for more details about fertilty solutions</Text>
       

      </Card>
    
   </View>
	</ScrollView>  
  );
};
const theme = {
  colors:{
      primary:"#006aff"
  }
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
	
  },
  inputStyle:{
    margin:5
}
});


export default Fertility;