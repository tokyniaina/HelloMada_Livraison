import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { s } from './Txt.Style'


const Txt = ({children, style}) => {
    const {height} = useWindowDimensions()
    const fontSize = style?.fontSize || s?.styleText.fontSize || 15
    
  return (
    <Text style={[s.styleText, style, {fontSize: fontSize * height *0.00126}]} >{children}</Text>
  )
}

export default Txt