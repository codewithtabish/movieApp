import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import malls from '../../../../data/malls'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Malls = ({singleMovie}) => {
    const [mallDates, setmallDates] = useState(null)
    const navi=  useNavigation()
  return (
    <View>
    {
    malls.map((mall,index)=>{
        return <>
        <TouchableOpacity style={{margin:10,
        elevation:2,backgroundColor:"white",padding:10,
        borderRadius:10}} key={index}
        onPress={()=>setmallDates(mall.name)}
        >
            <Text style={{fontSize:16,fontWeight:"600"}}>{mall.name}</Text>
        </TouchableOpacity>
        {
            mallDates?.includes(mall.name)?
            <FlatList
            numColumns={3}
                data={mall.showtimes}
                renderItem={({item})=>{
                    return <TouchableOpacity
                    onPress={()=>navi.navigate('Therate',{
                        singleMovie,
                        selectedDate:item,
                        mall:mall

                    })}
                     style={{margin:10,
                    width:100,
                    borderWidth:.5,borderColor:"gray",padding:10,
                    borderRadius:6,flexDirection:"row",justifyContent:"center",
                    alignSelf:"center"
                    }}>
                        <Text style={{color:"green"}}>{item}</Text>
                    </TouchableOpacity>
                }}
            />:null

        }
        </>
    })
    }


    </View>
  )
}

export default Malls

const styles = StyleSheet.create({})