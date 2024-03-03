import { View, Text, Image } from 'react-native'
import React from 'react'
import client from '../../../assets/images/client.jpg'
import NavBar from '../../../assets/images/NavBar.png'
import { s } from './NavBar.style'
s


const Navbar = () => {
  return (
    <>
    <View style={s.containerNav}>
      <Image source={client} style={s.imgPersonne}/>
      <View style={s.infoPersonne}>
        <Text>Nirina</Text>
        <Text>Client</Text>
      </View>
      
    </View>
    <View style={s.toggleStyle}>
        <Image source={NavBar} style={s.ToggleImage}/>
    </View>
    
    </>
  )
  
}

export default Navbar