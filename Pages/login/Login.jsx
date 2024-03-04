import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../Components/Container/Container'
import Txt from '../../Components/Txt/Txt'
import { s } from './Login.style'

const Login = () => {
  return (
    <Container >
        <View style={s.titleLogin}>
            <Txt style={s.TextTitleLogin}>Login</Txt>
        </View>
        <View style={s.formLogin} >
            <Txt>Formulaire</Txt>
        </View>
      
    </Container>
  )
}

export default Login