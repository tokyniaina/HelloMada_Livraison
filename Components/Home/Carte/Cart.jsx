import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { s } from "./Cart.style";

const Cart = () => {
  return (
    <View style={s.containerMap}>
      <View style={s.mapContainer}>
        <MapView
          style={s.mapView}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </View>
  );
};

export default Cart;
