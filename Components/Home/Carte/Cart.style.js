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
})