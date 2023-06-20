import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import movies from '../../../../data/movies'
import Header from './Header'
import { useNavigation } from '@react-navigation/native'

const Movies = () => {
    const navi=useNavigation()

  return (
    <View>
    <FlatList
    showsVerticalScrollIndicator={false}
    ListHeaderComponent=<Header/>
    numColumns={2}
        data={movies}
        renderItem={({item})=>(
            <Pressable style={{margin:10}}>
                    <Image
                    style={{aspectRatio:2/3,height:240,
                    borderRadius:10,marginLeft:0}}
                        source={{uri:item.image}}
                    />
                    <Text style={{
                        fontSize:16,fontWeight:"bold"
                        ,paddingVertical:6,
                        textAlign:"center",
                        width:'90%',
                        height:30,
                    }}>{item.name.length>16?item.name.slice(0,13):item.name} ...</Text>
                    <Text style={{fontSize:15,color:"gray",
                    fontWeight:"600"}}>{item.language}</Text>
                    <Text style={{color:"black",
                    fontWeight:"600",paddingVertical:4,
                    fontWeight:"bold"}}>{item.genre}</Text>
            <TouchableOpacity style={{backgroundColor:"#ffc40c",
            marginTop:6,
        paddingVertical:10,padding:15,borderRadius:6,marginRight:10}}>
            <Text style={{color:"white",fontWeight:"bold"}}
            onPress={()=>navi.navigate('MovieScreen',{
                movieID:item.id
            })}>Book</Text>
        </TouchableOpacity>
                </Pressable>
        )}
        />





    </View>
  )
}

export default Movies

const styles = StyleSheet.create({})