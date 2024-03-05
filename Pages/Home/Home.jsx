import { View, Text,ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'
import { s } from "./Home.style";
import NavBar from "../../Components/Home/NabBar/NavBar";
import Cart from "../../Components/Home/Carte/Cart";
import ServiceType from "../../Components/Home/ServiceType/ServiceType";
import ListePersonneService from "../../Components/Home/ListePersonneService/ListePersonneService";
import { livreurs } from "../../FakeData/fakeData";
import livreurImg from "../../assets/images/livreurImg.jpg"
import Txt from "../../Components/Txt/Txt";
import {useNavigation} from '@react-navigation/native'

const Home = () => {
  const [coordonnee, setCoordonnee] = useState()
  const [livreur, setLivreur] = useState(livreurs);
  const nav = useNavigation()

  useEffect(()=>{
    getUserCoordonnee();
  }, [])

  console.log(livreurs);

  const listLivreur = () => {
    return livreur.map((livreur, index) => (
      <ListePersonneService key={livreur.id} livreur={livreur} image={livreurImg}/>
    ));
  };
  const goToLogin = () =>{
    nav.navigate("Login")
  }

  async function getUserCoordonnee(){
    let {status} = await requestForegroundPermissionsAsync();
    if(status === "granted"){
      const location = await getCurrentPositionAsync();
      setCoordonnee({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });

    } else {
      setCoords({ lat: "-18.87", lng: "27.56" });
    }
  }


  return (
    <Container>
      <View style={s.NavBar}>
        <NavBar onPress={goToLogin} coordonnee={coordonnee}/>
      </View>
      <View style={s.cart}>
        {coordonnee && <Cart coordonnees = {coordonnee}/>}
      </View>
      <View style={s.serviceType}>
        <ServiceType />
      </View>
      <View style={s.ListepersoService}>
        <Txt style={s.titreListe}>APROXIMITE</Txt>
        <ScrollView showsVerticalScrollIndicator={false} style={s.listePerso}>{listLivreur()}</ScrollView>
      </View>
    </Container>
  );
};

export default Home;
