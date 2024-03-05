import { View, Text } from 'react-native'
import React from 'react'
import { s } from './DetailPprofil.style'
import Txt from '../../../Components/Txt/Txt'


const DetailPprofil = ({params}) => {
  return (
    <>
    <View style={s.nomProfilContainer} >
      <Txt style={s.nomProfil} >ARILALALAL tokokokokok</Txt>
    </View>
    <View style={s.nomProfilContainer}>
        <Txt style={s.nomProfil} >COORDONNEE</Txt>
        <View style={s.coordonnee}>
            <Txt>Latitude</Txt>
            <Txt>longitude</Txt>
        </View>
        <View style={s.coordonnee}>
            <Txt>{params.coordonnee.lat}</Txt>
            <Txt>{params.coordonnee.lng}</Txt>
        </View>
    </View>
    
    </>
    
  )
}

export default DetailPprofil