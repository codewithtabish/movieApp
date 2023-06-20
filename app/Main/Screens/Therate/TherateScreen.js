import { FlatList, SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToSeat } from '../../../redux/reducers/seatReducer';
import { Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

const TherateScreen = () => {
  const route=useRoute()
  const stripe = useStripe();
  const navi=useNavigation()

  const {singleMovie,mall,selectedDate}=route?.params
  const {seatArray} =useSelector((state)=>state.seat)
  const [mySelectedSeat, setMySelectedSeat] = useState(null)
  const dispatch=useDispatch()
  const fee=87
  const total=seatArray.length>0?fee*seatArray.length:0

  const handleSeat=(item)=>{
    dispatch(addToSeat(item))

  }
 useEffect(() => {
  const checkSelectedSeats=()=>{
    // mall.tableData.map()

  }


 }, [])
 const handleSubscribe=async()=>{
  navi.navigate('Ticket',{
        singleMovie:singleMovie,
        mall:mall,
        selectedDate:selectedDate,
        total:total

      })
          const response = await fetch("http://192.168.43.10:3000/payment", {
      method: "POST",
      body: JSON.stringify({
        amount:Math.floor(total*100),


      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    try{
      const data = await response.json();
      console.log(data);
      navi.navigate('Ticket',{
        singleMovie:singleMovie,
        mall:mall,
        selectedDate:selectedDate,
        total:total

      })
      if (!response.ok) return Alert.alert('The not ok is ',data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentclientSecret: clientSecret,
        // merchantDisplayName: 'Merchant Name',
      });
      if (initSheet.error) return Alert.alert('The error is ',initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,

      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
    }catch(err){
      return  Alert.alert(err)

    }

 }

  return (
    <>

    <ScrollView style={{marginTop:15}}
    contentContainerStyle={{paddingBottom:70}}>
     <View style={{flexDirection:"row",justifyContent:"space-between",
     marginHorizontal:15,paddingTop:20,paddingBottom:10,alignItems:"center"}}>
     <View>
     <Text style={{color:"black",fontSize:17,paddingVertical:2}}>
      {singleMovie.name}
      {seatArray?.length}

      </Text>
      <Text style={{color:"gray",
      fontSize:15}}>{mall?.name}</Text>
     </View>
     <View>
     <AntDesign name="sharealt" size={24} color="purple" />

     </View>

     </View>
      <Text style={{textAlign:"center",
      fontStyle:"normal",fontWeight:"bold",paddingTop:2}}>{selectedDate}</Text>
      <Text style={{textAlign:"center",
      color:"gray",marginTop:10,fontSize:15}}>Classic  (220)</Text>
      <FlatList
      style={{marginTop:20,marginHorizontal:10}}
        data={mall.tableData}
        numColumns={8}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
          const p=seatArray.find((k)=>k===item)
          return <>{p?    <TouchableOpacity style={{margin:6,borderColor:"#ccc",
            borderWidth:.1,padding:10,elevation:1,
            backgroundColor:"#ffc40c",
            borderRadius:5}}
            onPress={()=>handleSeat(item)}>
              <Text style={{color:"white"}}>{item}</Text>
            </TouchableOpacity>  :
            <TouchableOpacity style={{margin:6,borderColor:"#ccc",
            borderWidth:.1,padding:10,elevation:1,
            borderRadius:5}}
            onPress={()=>handleSeat(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
            }
            </>

        }}
      />


      <View style={{flexDirection:"row",justifyContent:"center",
      marginTop:20,backgroundColor:"#d8d8d8",padding:13}}>
      <View style={{marginHorizontal:20,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1}}>
<FontAwesome name="square" size={24} color="#ffc40c" />
   <Text>Selected</Text>
      </View>
      <View style={{marginHorizontal:20,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1}}>
<FontAwesome name="square" size={24} color="white" />
   <Text>Vacant</Text>
      </View>
      <View style={{marginHorizontal:20,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1}}>
<FontAwesome name="square" size={24} color="#989898" />
 <Text>Occupied</Text>
      </View>

      </View>
      <View style={{flexDirection:"row",paddingHorizontal:15,alignItems:"center",justifyContent:"space-between",marginTop:6,
      flexWrap:"wrap"}}>
      <View>
        <Text style={{fontSize:13,color:"gray",marginBottom:3}}>show end time approx 5:30</Text>
        <View style={{flexDirection:"row",gap:1,flexWrap:"wrap"}}>
        {
          seatArray.length>0 ?
          seatArray.map((item,index)=>{
         return <View style={{flexDirection:"row",
         gap:5,flexWrap:"wrap"}}>
         <TouchableOpacity style={{margin:6,borderColor:"#ccc",
            borderWidth:.1,padding:10,elevation:1,
            backgroundColor:"#ffc40c",
            borderRadius:5}}
            onPress={()=>handleSeat(item)}>
              <Text style={{color:"white"}}>{item}</Text>
            </TouchableOpacity>
         </View>


          }):<Text>No seat selected</Text>
        }
        </View>


     </View>
      <View style={{backgroundColor:"#e9e9e9",padding:6,paddingHorizontal:10,
      borderRadius:6,marginBottom:6}}>
        <Text style={{width:100,textAlign:"center",color:"black"}}>Now with tacket cancelation</Text>
      </View>
      </View>



    </ScrollView>
    <TouchableOpacity
    activeOpacity={.6} style={{backgroundColor:"#ffc40c",padding:12,position:"absolute",
      bottom:4,width:"90%",marginLeft:20,borderRadius:6,
      flexDirection:"row",
      justifyContent:"space-between",alignItems:"center",
      }}
      onPress={handleSubscribe}>
      {!seatArray.length>0?
        <Text></Text>:<Text style={{color:"white"}}>{seatArray.length}   seat selected</Text>
}
       <Text style={{color:"white",
        fontWeight:"bold"}}>{total}</Text>
      </TouchableOpacity>
    </>
  )
}

export default TherateScreen

const styles = StyleSheet.create({})