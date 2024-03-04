import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../Components/Container/Container'
import Txt from '../../Components/Txt/Txt'
import { s } from './Login.style'
import FormLogin from './fomulaire/FormulaireLogin/FormLogin'
import imgLog from '../../assets/images/IconLogin.png'
import Iconprevious from '../../assets/images/Iconprevious.jpg'
import {useNavigation } from "@react-navigation/native";

const Login = () => {

  const nav = useNavigation()
  return (
    <Container >
      <View style={s.ViewPreviousIcon}>
        <TouchableOpacity style={s.containerPrevious} onPress={()=>nav.goBack()}>
          <Image style={s.iconPrevious} source={Iconprevious}/>
        </TouchableOpacity>
      </View>
        <View style={s.titleLogin}>
          <Image style={s.iconLogin} source={imgLog}/>
            <Txt style={s.TextTitleLogin}>MEMBRE LOGIN</Txt>
        </View>
        <View style={s.formLogin} >
            <FormLogin/>
        </View>
      
    </Container>
  )
}

export default Login