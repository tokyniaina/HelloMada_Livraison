import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../Components/Container/Container'
import Txt from '../../Components/Txt/Txt'
import Iconprevious from '../../assets/images/Iconprevious.jpg'
import {useNavigation } from "@react-navigation/native";
import IconAddPhotoSingup from "../../assets/images/IconAddPhotoSingup.jpg"
import FormSignUp from './formulaire/FormulaireSingUp/FormSignUp'
import { s } from './SingUp.style'

const SignUp = () => {

  const nav = useNavigation()
  return (
    <Container >
      <View style={s.ViewPreviousIcon} >
        <TouchableOpacity style={s.containerPrevious} onPress={()=>nav.navigate("Home")}>
          <Image style={s.iconPrevious} source={Iconprevious}/>
        </TouchableOpacity>
      </View>
        <View style={s.titleSignUp}>
          <Image style={s.iconSingUp} source={IconAddPhotoSingup}/>
            <Txt style={s.TextTitleSingUp}>SING UP</Txt>
        </View>
        <View style={s.formSingUp} >
            <FormSignUp/>
        </View>
      
    </Container>
  )
}

export default SignUp