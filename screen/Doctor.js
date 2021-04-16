import React,{useState} from "react";
import { View, StyleSheet, Text ,Modal} from "react-native";
import {Card, ListItem, Icon,Button} from "react-native-elements";
import {TextInput} from 'react-native-paper';

const Doctor = ({ navigation }) => {
  const [modal,setModal] = useState(false)

  return (
    <View felx Top style={{ flex: 1 , alignItems: 'center',flexDirection:'column',paddingTop:0}}>
    
	  <View style={{flex:2 ,flexDirection: 'row'}}>
	  <Card  style={{width:150, height:120, borderRadius: 80, borderColor:'maroon'}}>
  <Card.Title>Dr.Suchita</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('../assets/doctor.png')}  style={{width:75, height:75,justifyContent: 'center',alignItems:'center' }}	/ >
    <Text style={{marginBottom: 10}}>
      Consultant: Obsterician & Gynacologist
    </Text>
    <Button      
      buttonStyle={{ width:200, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'maroon'}}
      title='Book Appointment'    onPress={() => setModal(true)} />
      <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
               <View style={styles.modalView}>
                 <TextInput
                label='Name'
                style={styles.inputStyle}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
             <TextInput
                label='Contact No'
                style={styles.inputStyle}
                keyboardType="number-pad"
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
                     
                     <View style={styles.modalButtonView}>
                     <Button style={styles.inputStyle}
              mode="contained" 
              title="Close"
              theme={theme}
              onPress={() => setModal(false)}>
                  Cancel 
             </Button>
             </View>
             </View>
             </Modal>
     
 
</Card>
</View>
<View style={{flex:2 ,flexDirection: 'row'}}>
	  <Card style={{width:150, height:120}}>
  <Card.Title>Dr. XYS</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('../assets/doctor.png')}  style={{width:75, height:75,justifyContent: 'center',alignItems:'center' }}	/ >
    <Text style={{marginBottom: 10}}>
      Consultant: Obsterician & Gynacologist
    </Text>
    <Button      
      buttonStyle={{ width:200, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'maroon'}}
      title='Book Appointment' />
 
</Card>
</View>
    </View>
  );
};
const theme = {
    colors:{
        primary:"#006aff"
    }
}
const styles=StyleSheet.create({
    root:{
       flex:1,
       marginTop:2
    },
    inputStyle:{
        margin:5
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"

    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    }
})

export default Doctor;