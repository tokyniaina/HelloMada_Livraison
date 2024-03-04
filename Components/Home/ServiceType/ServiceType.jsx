import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import colis from "../../../assets/images/cerviseType/colis.png";
import course from "../../../assets/images/cerviseType/course.png";
import livraison from "../../../assets/images/cerviseType/livraison.png";
import { s } from "./Service.style";
import Txt from "../../Txt/Txt";

const ServiceType = () => {
  return (
    <View style={s.containerService}>
      <TouchableOpacity style={s.typeServiceView}>
        <Image style={s.imgService} source={livraison} />
        <Txt>livraison</Txt>
      </TouchableOpacity>
      <TouchableOpacity style={s.typeServiceView}>
        <Image style={s.imgService} source={course} />
        <Txt>Course</Txt>
      </TouchableOpacity>
      <TouchableOpacity style={s.typeServiceView}>
        <Image style={s.imgService} source={colis} />
        <Txt>colis</Txt>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceType;
