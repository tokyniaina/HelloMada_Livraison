import { View, Text } from 'react-native'
import React from 'react'
import { s } from './DetailPprofil.style'
import Txt from '../../../Components/Txt/Txt'


const DetailPprofil = () => {
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
            <Txt>15.2</Txt>
            <Txt>56.3</Txt>
        </View>
    </View>
    
    </>
    
  )
}

export default DetailPprofil