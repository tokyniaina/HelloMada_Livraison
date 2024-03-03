import { View, Text, Image } from "react-native";
import React from "react";
import { s } from "./ListePersonneService.style";

const ListePersonneService = ({ livreur, image }) => {
  return (
    <View style={s.containerListe}>
      <View style={s.infoEtPhoto}>
        <View style={s.imgContenue}>
          <Image style={s.imageLivreur} source={image} />
        </View>

        <View style={s.infoLivreur}>
          <Text>{livreur.nom}</Text>
          <Text>petite infomation ...</Text>
        </View>
      </View>

      <View style={s.lieu}>
        <Text>2 mètres</Text>
      </View>
    </View>
  );
};

export default ListePersonneService;
