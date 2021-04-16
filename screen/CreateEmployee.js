import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
//import * as ImagePicker from 'expo-image-picker';
//import * as Permissions from 'expo-permissions';

const CreateEmployee = ()=>{
    
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    
    const [phone,setPhone] = useState("")
    const [picture,setPicture] = useState("")
    const [salary,setSalary] = useState("") 
    const [position,setPosition] = useState("")
    const [modal,setModal] = useState(false)

    const submitData = ()=>{
        Alert.alert("hello");
        console.log("hello");
      fetch("http://e299b5dab181.ngrok.io/send-data",{
        method:"post", 
             headers:{
                 'accept':'application/json',
               'Content-Type': 'application/json'
             },
             body:JSON.stringify({
              
                name,
                 email,
                  phone,
                picture,
                 salary,               
             position
             })
         })
         .then(res=>res.json())
         .then(data=>{
             console.log(data)                    
         })
         .catch(err=>{
             console.log(err)
         })
         
        
  }

    return(
        <View style={styles.root}>
            <TextInput
                label='Name'
                style={styles.inputStyle}
                value={name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                label='Email'
                style={styles.inputStyle}
                value={email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label='phone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text =>setPhone(text)}
            />
            <TextInput
                label='picture'
                style={styles.inputStyle}
                value={picture}
                theme={theme}
                
                mode="outlined"
                onChangeText={text =>setPicture(text)}
            />
             
            <TextInput
                label='salary'
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                
                mode="outlined"
                onChangeText={text =>setSalary(text)}
            />
            <TextInput
                label='position'
                style={styles.inputStyle}
                value={position}
                theme={theme}
                
                mode="outlined"
                onChangeText={text =>setPosition(text)}
            />
            <Button 
             style={styles.inputStyle}
             icon="content-save"
              mode="contained" 
              theme={theme}
              onPress={submitData}>
                   save
             </Button>
            
             <Button style={styles.inputStyle}
              icon="camera"
             
            
              mode="contained"
               title="upload image"
              theme={theme}
              onPress={() => setModal(true)}>
                 Open Model  
             </Button>
{/*              
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
                value={name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
                     
                     <View style={styles.modalButtonView}>
                     <Button style={styles.inputStyle}
              icon="camera"
             
         
              mode="contained" 
              theme={theme}
              onPress={() => setModal(false)}>
                  Cancel 
             </Button>
             <Button style={styles.inputStyle}
              icon="camera"
             
            
            mode="contained" 
              theme={theme}
              onPress={() => setModal(false)}>
                  save
                   
             </Button>
             </View>
             <Button style={styles.inputStyle}
              icon="content-save"
             
            title="save"
            mode="contained" 
              theme={theme}
              onPress={() => setModal(false)}>
                   
             </Button>
                         </View>
                 
                 </Modal> */}
            </View>
    )
}
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
export default CreateEmployee