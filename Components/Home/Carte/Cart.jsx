import { View, Text,TouchableOpacity } from "react-native";
import React, {useState} from "react";
import MapView, {Marker} from "react-native-maps";
import { s } from "./Cart.style";

const Cart = ({ coordonnees }) => {
  // console.log('depuis cart');
  // console.log(coordonnees);
  const [mapType, setMapType] = useState("standard");

  const toggleMapType = () => {
    setMapType(mapType === "standard" ? "satellite" : "standard");
  };

  
  return (
    <View style={s.containerMap}>
      <View style={s.mapContainer}>
      <MapView
          style={s.mapView}
          initialRegion={{
            latitude:coordonnees.lat ||-18.87,
            longitude:coordonnees.lng ||27.56,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
          mapType={mapType}
          showsCompass={false}
        >
          <Marker
            coordinate={{
              latitude: coordonnees.lat ||-18.87,
              longitude: coordonnees.lng ||27.56,
            }}
            title={"Localisation"}
            description={"Ceci est votre position actuelle"}
            // image={require('../../../assets/images/IconLocationPin.jpg')} // chemin de l'image pink
            // style={{ width: 50, height: 50 }}
            
          />
        </MapView>
        <TouchableOpacity
          style={s.toggleButton}
          onPress={toggleMapType}
        >
          <Text style={s.toggleButtonText}>
            {mapType === "standard" ? "Satellite" : "Standard"}
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Cart;
