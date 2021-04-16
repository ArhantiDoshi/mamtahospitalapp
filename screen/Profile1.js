import React from 'react';
import { StyleSheet, Text, View ,Image,Linking,Platform,Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper';
import { MaterialIcons,Entypo} from '@expo/vector-icons';






const Profile=(props)=>{

const {id,name,Title,Description,position,salary,phone,email,image} = props.route.params.item

    
    return(

    <View style={styles.root}>
        <LinearGradient
         colors={["#0033ff","#6bc1ff"]}
         style={{height:"20%"}}
         />
         
          <View style={{alignItems:"center"}}>
          <Image
         style={{width:140,height:140,borderRadius:140/2,marginTop:-50}}
         source={{uri:image}}
         /> 
      </View>

      <View style={{alignItems:"center",margin:15}}>

      <Card>
	 <Card.Title style={{color:'pink', fontWeight:'bold', fontSize:16}}>{name}</Card.Title>
     <Text style={{color:'pink', fontWeight:'bold', fontSize:16, textAlign:'center'}}>{Title}</Text>
        <Text>{Description}</Text>  
        </Card>
        </View>
        </View>

    );           
     
}


const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
cardContent:{
    flexDirection:"row",
    padding:8
},
mytext:{
    fontSize:18,
    marginTop:3,
    marginLeft:5
}
})  
export default Profile;