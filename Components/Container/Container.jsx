import { View, Text, ImageBackground, } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Container.Style";
import  backgroundImage from '../../assets/images/background.png'
import  backroundColorGreen from '../../assets/images/backgroundColorGreen.png'


const Container = ({ children }) => {
  return (
    <ImageBackground source={backroundColorGreen}  style={s.img_background}>
      <SafeAreaProvider >
        <SafeAreaView style={s.containerApp} >{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default Container;
