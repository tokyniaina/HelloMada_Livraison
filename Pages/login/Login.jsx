import { View, Text, Image } from 'react-native'
import React from 'react'
import Container from '../../Components/Container/Container'
import Txt from '../../Components/Txt/Txt'
import { s } from './Login.style'
import FormLogin from './fomulaire/FormulaireLogin/FormLogin'
import imgLog from '../../assets/images/IconLogin.png'

const Login = () => {
  return (
    <Container >
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