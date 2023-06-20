import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import moment from 'moment-jalaali'
import { Image } from 'react-native'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native'

const TicketScreen = () => {
    const route=useRoute()
    const {singleMovie,mall,selectedDate,total}=route?.params
    const {seatArray} =useSelector((state)=>state.seat)

    useEffect(() => {
        const backAction = () => {
          Alert.alert('Hold on!', 'Are you sure you want to go back?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        };

        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );

        return () => backHandler.remove();
      }, []);


  return (
    <SafeAreaView  style={{flex:1,flexDirection:"column",justifyContent:"center"}}>
  {/* <View style={{backgroundColor:"green"}}> */}
  <View style={{height:"90%",backgroundColor:"white",
    borderRadius:10,margin:15,padding:10}}>
    <View style={{flexDirection:"row",
    justifyContent:"space-between",alignItems:"center"}}>
        <View style={{flex:1}}>
            <Text style={{color:"gray",
            fontSize:15,fontWeight:"bold"}}>{singleMovie.name}</Text>
            <Text style={{color:"gray",
            paddingVertical:2,fontWeight:"300",
            fontSize:17}}>HINDI -2D</Text>
            <Text style={{}}>{mall.name}</Text>
        </View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end"}}>
            <Text style={{color:"red",fontWeight:"bold"}}>PVT TICKET</Text>
        </View>
    </View>
    <View style={{borderColor:"gray",
    borderWidth:.5,margin:10,borderStyle:"dotted"}}></View>
    <View style={{flexDirection:"row",justifyContent:"space-between",
    alignItems:"center"}}>
        <View>
            <Text style={{color:"gray",
            fontSize:16,paddingVertical:5}}>Date and Time</Text>
            <Text style={{color:"black",
            fontWeight:"500"}}>{selectedDate}</Text>
            <Text style={{color:"black",paddingVertical:6}}>{moment().format('MMMM   Do  YYYY')}</Text>

        </View>
        <View>
            <Image
            style={{aspectRatio:4/2,height:80}}
                source={{uri:singleMovie.image}}
            />
        </View>
    </View>
    <View style={{borderColor:"gray",
    borderWidth:.5,margin:10,borderStyle:"dotted"}}></View>
    <View style={{flexDirection:"row",justifyContent:"space-between",
    alignItems:"center"}}>
        <View style={{flexDirection:"column",gap:2,alignItems:"center",
        gap:10,flex:1}}>
            <Text>AUDI NO</Text>
            <Text>2</Text>
        </View>
        <View style={{flexDirection:"column",
        alignItems:"center",gap:10,flex:1}}>
            <Text>TICKETS</Text>
            <Text>{seatArray.length}</Text>
        </View>
        <View>



     </View>

    </View>
    <View style={{flexDirection:"row",gap:1,flexWrap:"wrap",flex:1,
        flex:1,marginTop:20,justifyContent:"center"}}>
        {
          seatArray.length>0 ?
          seatArray.map((item,index)=>{
         return <View style={{flexDirection:"row",
         gap:5,flexWrap:"wrap"}}>
         <TouchableOpacity style={{margin:6,borderColor:"#ccc",
            borderWidth:.1,padding:10,elevation:1,
            backgroundColor:"#ffc40c",
            borderRadius:5}}
            // onPress={()=>handleSeat(item)}
            >
              <Text style={{color:"white"}}>{item}</Text>
            </TouchableOpacity>
         </View>


          }):null
        }
        </View>

        <View style={{backgroundColor:"#8da399",
        height:140,borderRadius:8,margin:10}}>
        <View style={{padding:10}}>
        <Text style={{paddingVertical:2,fontWeight:"bold"}}>Ticket Details</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",
        alignItems:"center",paddingVertical:2}}>
            <Text style={{color:"white"}}>0`S seats convenience</Text>
            <Text style={{color:"white"}}>₹ 260</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",
        alignItems:"center",paddingVertical:2}}>
            <Text style={{color:"white"}}> convenience Fee</Text>
            <Text style={{color:"white"}}>₹ 87</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",
        alignItems:"center",paddingVertical:2}}>
            <Text style={{color:"white"}}> Grand Total</Text>
            <Text style={{color:"white"}}>₹ {total}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",
        alignItems:"center",paddingVertical:2}}>
            <Text style={{color:"white"}}> ID NO</Text>
            <Text style={{color:"white",
            fontSize:13}}>NKT7pEh057yBlcl1YQ3Lmwo</Text>
        </View>

        </View>

        </View>





    {/* </View> */}

  </View>


    </SafeAreaView>
  )
}

export default TicketScreen

const styles = StyleSheet.create({})