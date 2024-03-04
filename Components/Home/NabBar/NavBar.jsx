import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import client from '../../../assets/images/client.jpg'
import NavBar from '../../../assets/images/NavBar.png'
import { s } from './NavBar.style'
import Txt from '../../Txt/Txt'
import {useNavigation } from "@react-navigation/native";



const Navbar = ({onPress}) => {
  const nav = useNavigation()
  return (
    <>
    <View style={s.containerNav}>
      <TouchableOpacity onPress={() => nav.navigate('Profil')}>
        <Image source={client} style={s.imgPersonne}/>
      </TouchableOpacity>
      
      <View style={s.infoPersonne}>
        <Txt>Nirina</Txt>
        <Txt>Client</Txt>
      </View>
      
    </View>
    <TouchableOpacity style={s.toggleStyle} onPress={onPress} >
        <Image source={NavBar} style={s.ToggleImage}/>
    </TouchableOpacity>
    
    </>
  )
  
}

export default Navbar