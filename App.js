import { View, Text } from "react-native";
import React from "react";
import Container from "./Components/Container/Container";
import Home from "./Pages/Home/Home";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/SingUp/SingUp";
import ProfilUser from "./Pages/ProfilUser/ProfilUser";

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent", // Background color
  },
};

const App = () => {
  const [isFontloader] = useFonts({
    AlataRegular: AlataRegular,
  });
  return <>
  
  <NavigationContainer theme={navTheme} >
    {isFontloader ? (
      <Stack.Navigator
      screenOptions={{
        animation:"fade",
        headerShown:false
      }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Profil" component={ProfilUser}/>
      </Stack.Navigator>
    )  : null}
  </NavigationContainer>
  
  
  
  </>;
};

export default App;
