import { StyleSheet } from "react-native";

const s =StyleSheet.create({
    iconPrevious:{
        width:40,
        height:40
    },
    photoProfils:{
        marginTop:20,
        marginBottom:-10,
        justifyContent:'center',
        alignItems:'center',
        zIndex:2
    },
    photos:{
        position:'solide',
        borderWidth:3,
        width:140,
        height:140,
        borderColor:'white',
        borderRadius: 100, // Ajoutez cette ligne pour arrondir les bordures
        overflow: 'hidden',
    },
    
    photo:{
        width:140,
        height:140
    },

    infoProfils:{
        flex:4,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        backgroundColor:'#00C2B2',
        marginHorizontal:10,
        overflow: 'hidden',
        elevation:5,
        zIndex:1
    }
})
export {s}