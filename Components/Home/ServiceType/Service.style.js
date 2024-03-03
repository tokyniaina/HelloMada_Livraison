import { StyleSheet } from "react-native";

const s =StyleSheet.create({
    containerService:{
        flex:1,
        backgroundColor:"#00A79D",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius:5,
        elevation:5

      },
      typeServiceView:{
        paddingHorizontal:15,
        justifyContent:'flex-start',
        alignItems:'center',
        
      },
    imgService:{
        width:65,
        height:65,
        justifyContent:'center'
    }
})
export {s}