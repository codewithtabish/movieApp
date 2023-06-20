import { ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
    const types = [
        {
          id: "0",
          name: "IMAX",
        },
        {
          id: "1",
          name: "4DX",
        },
        {
          id: "2",
          name: "PXL",
        },
        {
          id: "3",
          name: "GOLD",
        },
        {
          id: "4",
          name: "PLAYHOUSE",
        },
      ];
  return (
    <SafeAreaView style={{marginTop:20}}>
      <ImageBackground
    style={{aspectRatio:5/2,height:170}}
      source={{  uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020779.jpg"}}
    />
    <Pressable style={{height:130,backgroundColor:"white",
    width:"83%",position:"absolute",top:140,
    left:30,right:30,borderRadius:10,padding:10}}>
    <Text style={{color:"black",padding:2,
    fontWeight:"600"}}>Releasing in one Day</Text>
    <View style={{flexDirection:"row",padding:2,
    alignItems:"center",justifyContent:"space-between"}}>
        <View>
        <Text style={{color:"black",
        fontWeight:"bold",paddingVertical:5,fontSize:17}}>VIKRANT RONA</Text>
        <Text style={{color:"gray",fontStyle:"italic"}}>UK - Khannad </Text>

        </View>
        <TouchableOpacity style={{backgroundColor:"#ffc40c",
        paddingVertical:10,padding:15,borderRadius:6,marginRight:10}}>
            <Text style={{color:"white",fontWeight:"bold"}}>Book</Text>
        </TouchableOpacity>

    </View>
    <Text style={{marginTop:7,fontWeight:"500",
    fontSize:15}}>Fantasy, Trailer , Action</Text>


    </Pressable>
    <View style={{marginTop:110,}}/>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {types.map((item,index) => (
                <View style={{margin:10,borderColor:"C0C0C0",borderWidth:0.4,borderRadius:4,padding:10}} key={index}>
                    <Text style={{textAlign:"center",fontSize:14,fontWeight:"500"}}>{item.name}</Text>
                </View>
            ))}
      </ScrollView>

    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})