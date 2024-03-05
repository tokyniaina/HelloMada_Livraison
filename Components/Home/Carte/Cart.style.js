import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    containerMap: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
      },
      mapContainer: {
        borderWidth:3,
        borderColor:'white',
        borderRadius: 10, // Ajoutez cette ligne pour arrondir les bordures
        overflow: 'hidden', // Assurez-vous que le contenu dépasse les bordures arrondies
      },
      mapView: {
        width: '100%',
        height: '100%',
      },
      toggleButton: {
        position: "absolute",
        bottom: 2,
        left: 2,
        backgroundColor: "rgba(253, 253, 253, 1)",
        padding: 10,
        borderRadius: 5,
        zIndex: 1000,
        elevation:5,
        borderWidth:0.5
      },
      toggleButtonText: {
        fontSize: 15,
      },
})