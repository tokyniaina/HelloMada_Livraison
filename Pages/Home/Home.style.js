import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  NavBar: {
    flex: 1,
    backgroundColor: "#00A79D",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  cart: {
    flex: 5,
    elevation: 2,
  },
  serviceType: {
    flex: 2,
    paddingVertical: 10,
  },
  ListepersoService: {
    flex: 5,
    backgroundColor: "#00A79D",
    flexDirection: "column",
    borderRadius: 10,
  },
  
  titreListe:{
    paddingLeft:20,
    paddingVertical:5,
    marginBottom:10,
    fontSize:20,
    backgroundColor:'#00C2B2',
    borderRadius:5,
    elevation:2
  },
  listePerso:{
    flex:4, 
    backgroundColor:'white',
    borderRadius:5
  }
});
