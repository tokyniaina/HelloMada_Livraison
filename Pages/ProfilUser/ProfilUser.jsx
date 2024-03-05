import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import { s } from "./ProfilUser.style";
import Container from "../../Components/Container/Container";
import Txt from "../../Components/Txt/Txt";
import client from "../../assets/images/client.jpg";
import DetailPprofil from "./DetailProfil/DetailPprofil";
import Iconprevious from '../../assets/images/Iconprevious.jpg'
import {useNavigation, useRoute} from "@react-navigation/native";


const ProfilUser = () => {
    const nav = useNavigation()
    const {params} = useRoute()
  return (
    <Container>
      <View style={s.ViewPreviousIcon}>
        <TouchableOpacity
          style={s.containerPrevious}
          onPress={() => nav.goBack()}
        >
          <Image style={s.iconPrevious} source={Iconprevious} />
        </TouchableOpacity>
      </View>
      <View style={s.photoProfils}>
        <View style={s.photos}>
          <Image style={s.photo} source={client} />
        </View>
      </View>

      <View style={s.infoProfils}>
        <DetailPprofil params ={params} />
      </View>
    </Container>
  );
};

export default ProfilUser;
