import { View, Text, Image } from "react-native";
import React from "react";
import { s } from "./ListePersonneService.style";
import Txt from "../../Txt/Txt";


const ListePersonneService = ({ livreur, image }) => {
  return (
    <View style={s.containerListe}>
      <View style={s.infoEtPhoto}>
        <View style={s.imgContenue}>
          <Image style={s.imageLivreur} source={image} />
        </View>

        <View style={s.infoLivreur}>
          <Txt >{livreur.nom}</Txt>
          <Txt >petite infomation ...</Txt>
        </View>
      </View>

      <View style={s.lieu}>
        <Txt>2 mètres</Txt>
      </View>
    </View>
  );
};

export default ListePersonneService;
