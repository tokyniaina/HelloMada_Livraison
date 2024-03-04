import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    containerFormLogin:{
        // flex:1,
        backgroundColor:'#00c2b255',
        margin:30,
        paddingVertical:40,
        paddingHorizontal:25,
        borderRadius:30,
        
    },
    formInput:{
        
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        marginBottom:15,
        backgroundColor:'#00C2B2',
        borderRadius:50,
        elevation:2
    },
    styleInputText:{
        flex:1,
        fontFamily:"AlataRegular",
        paddingLeft:10,
        paddingVertical:10
        
    },
    iconLogin:{
        width:25,
        height:25
    },
    textInfo:{
        fontSize:50,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:5,
        marginVertical:20,
        
    },
    bouttonValid:{
        backgroundColor:'#00C2B2',
        marginTop:25,
        paddingVertical:10,
        paddingHorizontal:50,
        alignSelf:'center',
        borderRadius:20,
        borderWidth:0.1,
        elevation:5
    },
})

export {s}