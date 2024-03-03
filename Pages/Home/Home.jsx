import { View, Text,ScrollView } from "react-native";
import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import { s } from "./Home.style";
import NavBar from "../../Components/Home/NabBar/NavBar";
import Cart from "../../Components/Home/Carte/Cart";
import ServiceType from "../../Components/Home/ServiceType/ServiceType";
import ListePersonneService from "../../Components/Home/ListePersonneService/ListePersonneService";
import { livreurs } from "../../FakeData/fakeData";
import livreurImg from "../../assets/images/livreurImg.jpg"

const Home = () => {
  const [livreur, setLivreur] = useState(livreurs);

  console.log(livreurs);

  const listLivreur = () => {
    return livreur.map((livreur, index) => (
      <ListePersonneService key={livreur.id} livreur={livreur} image={livreurImg}/>
    ));
  };

  return (
    <Container>
      <View style={s.NavBar}>
        <NavBar />
      </View>
      <View style={s.cart}>
        <Cart />
      </View>
      <View style={s.serviceType}>
        <ServiceType />
      </View>
      <View style={s.ListepersoService}>
        <Text style={s.titreListe}>APROXIMITE</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={s.listePerso}>{listLivreur()}</ScrollView>
      </View>
    </Container>
  );
};

export default Home;
