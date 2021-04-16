import React from 'react';
import {Card,FAB} from 'react-native-paper';
import { CardViewWithImage } from 'react-native-simple-card-view';
import { Button, View, FlatList,Text, Image, StyleSheet, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import Doctor from './Doctor';
import Reservation from './Appointment';
import 'react-native-gesture-handler';
import { BackgroundCarousel } from "./BackgroundCarousel";
import {useSelector,useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DoctorStackNavigator, FertilityStackNavigator } from "../navigation/Stack";



const Home = ({ navigation }) => {





    const data=[
        {id:1,
        Description:'When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.',
        Title:'Fertility Solution',
        image: 'https://mamtahospital.netlify.app/assets/images/fertility.png'},
        {id:2,
        Description:'When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.',
        Title:'Gynacology Solution',
        image: 'https://mamtahospital.netlify.app/assets/images/Gynacology%20Surgery.png'},
        {id:"3",
        Description:"When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.",
        Title:"Child care",
        image: "https://mamtahospital.netlify.app/assets/images/children.png"},
        {id:"4",
                Description:"When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.",
        Title:"Laproscopy",
        image: "https://mamtahospital.netlify.app/assets/images/laproscopy.png"},
        {id:"5",
        Description:"When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.",
        Title:"Hair Loss",
        image: "https://mamtahospital.netlify.app/assets/images/hairloss.png"},
        {id:"6",
        Description:"When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.",
        Title:"Obasity",
        image: "https://mamtahospital.netlify.app/assets/images/obasity.png"},
        {id:"7",
        Description:"When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.",
        Title:"Cancer",
        image: "https://mamtahospital.netlify.app/assets/images/cancer.png"},
        {id:"8",
        Description:"When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.",
        Title:"Total Pregnancy Care",
        image: "https://mamtahospital.netlify.app/assets/images/total%20pregcare.png"},
        {id:"9",
        Description:"When you’ve been trying to conceive for longer than you anticipated, you should turn to your doctor. While many pregnancies are achieved with little or no medical assistance, many couples do have difficulty. Checking in with your OB/GYN early in the game is your best bet for reassurance, or for the recommendation to see a fertility specialist sooner. If it continues to take months upon months of trying without success, you may consider an evaluation for male factor infertility.",
        Title:"SkinCare",
        image: "https://mamtahospital.netlify.app/assets/images/skincare.png"},
    ];
    
    const images = [
      "https://mamtahospital.netlify.app/assets/images/mamtaimg5.jpg",
      "https://mamtahospital.netlify.app/assets/images/mamtaimg4.png",
      "https://mamtahospital.netlify.app/assets/images/mamtaimg1.png",];

   
    const renderList=((item)=>{
      
        return (
          <View felx Top style={{ flex: 1 , alignItems: 'center',paddingTop:0,backgroundColor:'white'}}>
<View style={{flex:2 ,flexDirection: 'row'}}>
<CardViewWithImage
        width={ (150)}
        //source={require('../assets/laproscopy.png')}
        source={{uri:item.image}}
        //source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheconversation.com%2Fwhats-in-a-title-when-it-comes-to-doctor-more-than-you-might-think-127979&psig=AOvVaw3yHCR8vWBcasmjskd28aoL&ust=1612454157798000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjF2f2Jzu4CFQAAAAAdAAAAABAD"}}
       roundedImage={ false }
        imageWidth={ 103}
        imageHeight={ 103 }
        onPress={()=>navigation.navigate("Services",{item})}>
<View style={style.cardview}>
                        
                               <View style={{marginLeft:10}}>
                               <Text style={style.text}>{item.id}</Text>
                               {/* <Text style={style.text}>{item.}</Text>
                               <Text style={style.text}>{item.position}</Text> */}
                               </View>
                               </View>
        </CardViewWithImage>
        
        
    
         
            </View>
            </View>
                ) ; 
    })
      return(
        <View style={{flex:1}}>
           <BackgroundCarousel images={images} />
    {/* <Image source={require('../assets/mamtaimg6.png')}
	  style={{width:385, height:200,justifyContent: 'center'}}	  /> */}
        <FlatList
              data={data}
             
              renderItem={({item})=>{
                return renderList(item)
              }}
            
              keyExtractor={item=>item.id}
              numColumns={3}
              />
            <Button            
             
            title="View Doctors"
            onPress={() => navigation.navigate('CreateEmployee')}
              >
                   
             </Button>   
        </View>
      )
            }   
    

const style = StyleSheet.create({
    mycard:{
        margin:5,
        padding:5
    },
    cardview:{
        flexDirection:"row",
        padding:6,
    },
    text:{
        fontSize:20,
        marginLeft:10
    },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;