import { StyleSheet , Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f7d4d8',
        //paddingBottom:Platform.OS === "ios" ? 34 : 10
    },
    header_container:{ 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        backgroundColor:'white', 
        marginBottom:10, 
        padding:8,
        paddingVertical:3,     
        elevation:10,
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.2,
        shadowColor:'#833C8B',
        shadowRadius:4,
        paddingTop:Platform.OS === "ios" ? 44 : StatusBar.height,
    },
    header_text:{
        fontSize:21, 
        fontWeight:'600',  
        textAlign:'center', 
        color:'#833C8B'
    },
    emptyListContainer:{
        flex:1,
        alignItems:'center', 
        marginTop:20,
        justifyContent:'center',
    },
    emptyListText:{
        fontSize:20, 
        color:'#b181a0',
        fontWeight:'700',
    },
});

export default styles;