import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import colis from "../../../assets/images/cerviseType/colis.png";
import course from "../../../assets/images/cerviseType/course.png";
import livraison from "../../../assets/images/cerviseType/livraison.png";
import { s } from "./Service.style";

const ServiceType = () => {
  return (
    <View style={s.containerService}>
      <TouchableOpacity style={s.typeServiceView}>
        <Image style={s.imgService} source={livraison} />
        <Text>livraison</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.typeServiceView}>
        <Image style={s.imgService} source={course} />
        <Text>Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.typeServiceView}>
        <Image style={s.imgService} source={colis} />
        <Text>colis</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceType;
