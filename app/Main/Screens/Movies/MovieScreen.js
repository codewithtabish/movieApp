import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import movies from '../../../data/movies'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import Malls from './components/Malls';

const MovieScreen = () => {
    const route= useRoute()
    const [selectedDate, setSelectedDate] = useState(null)
    const [singleMovie, setSingleMovie] = useState(null)
    const navi=useNavigation()
    useEffect(()=>{
      const single = movies.find((item)=>item.id===route.params.movieID)
      setSingleMovie(single)

      navi.setOptions({
          headerShown:true,
        title:singleMovie?.name?.length>15?singleMovie?.name?.slice(0,15):singleMovie?.name,
        headerTitleStyle:{
            color:"white"

        },
        headerStyle:{
            backgroundColor:"#ffc40c"

        },
        headerLeft:()=>{
            return(
                <Pressable onPress={()=>navi.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="white"                 style={{marginRight:12}}
              />
                </Pressable>


            )},
            headerRight:()=>{
                return (
                    <AntDesign name="logout"
                    style={{marginRight:10}} size={24} color="white" />

                )
            }


    //   })

      })

    },[singleMovie])
  return (

    <SafeAreaView style={{marginTop:0}}>
     <View style={{flexDirection:"row",gap:10,paddingHorizontal:15,
     marginTop:10}}>
     <AntDesign name="Safety" size={24} color="orange" />
     <Text style={{color:"gray"}}>Your saftey is our priority</Text>
     </View>

     <HorizontalDatepicker
  mode="gregorian"
  startDate={new Date('2020-08-20')}
  endDate={new Date('2020-08-31')}
  initialSelectedDate={new Date('2020-08-22')}
  onSelectedDateChange={(date) => setSelectedDate(date)}
  selectedItemWidth={170}
  unselectedItemWidth={38}
  itemHeight={38}
  itemRadius={10}
  selectedItemTextStyle={styles.selectedItemTextStyle}
  unselectedItemTextStyle={styles.selectedItemTextStyle}
  selectedItemBackgroundColor="#222831"
  unselectedItemBackgroundColor="#ececec"
  flatListContainerStyle={styles.flatListContainerStyle}
/>

<Malls singleMovie={singleMovie}/>
    </SafeAreaView>
  )
}

export default MovieScreen

const styles = StyleSheet.create({})