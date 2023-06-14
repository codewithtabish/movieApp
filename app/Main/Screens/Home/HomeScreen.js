import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const HomeScreen = () => {
    const {cartArray}=useSelector((state)=>state.cart)
  return (
    <View style={{padding:30,margin:80}}>
      <Text>
      {cartArray.length}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tenetur reprehenderit cupiditate cum doloribus sint odio quasi autem ex quidem iure, aliquam aut est. Officiis recusandae saepe voluptas laborum doloribus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, mollitia animi maxime impedit reiciendis illum asperiores odit voluptates, quas magni minima! Autem quos amet, pariatur maiores eius cumque molestiae repellendus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem tenetur maxime atque iste. Aliquam illo incidunt vel minus repellendus consequatur nisi quam suscipit recusandae? Nobis voluptates rem maxime? Eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem tenetur maxime atque iste. Aliquam illo incidunt vel minus repellendus consequatur nisi quam suscipit recusandae? Nobis voluptates rem maxime? Eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem tenetur maxime atque iste. Aliquam illo incidunt vel minus repellendus consequatur nisi quam suscipit recusandae? Nobis voluptates rem maxime? Eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem tenetur maxime atque iste. Aliquam illo incidunt vel minus repellendus consequatur nisi quam suscipit recusandae? Nobis voluptates rem maxime? Eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem tenetur maxime atque iste. Aliquam illo incidunt vel minus repellendus consequatur nisi quam suscipit recusandae? Nobis voluptates rem maxime? Eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem tenetur maxime atque iste. Aliquam illo incidunt vel minus repellendus consequatur nisi quam suscipit recusandae? Nobis voluptates rem maxime? Eos.
      </Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})