import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'#f2f2f2',
        backgroundColor:'#fff',
        borderRadius:14,
        //paddingHorizontal:10,
        backgroundColor:'#fff',
        
        marginHorizontal:20,
        marginTop:7,
        marginBottom:7,
        elevation:10,
                shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.2,
        shadowColor:'#833C8B',
        shadowRadius:4,
        //borderWidth:1,
        //borderColor:'#f7d4d8'
    },
    inner_container:{
        flexDirection:'row',
    },
    img:{
        //width:167,
        //borderTopLeftRadius:10,
        //borderTopRightRadius:10,
        borderRadius:14,
        //borderTopLeftRadius:20,
        //borderBottomLeftRadius:20,
        width:Dimensions.get('screen').width/4,
        height:110,
    },
    desc_container:{
        flex:1,
        marginHorizontal:15,
        margin:10,
        justifyContent:'center',
    },
    name:{
        fontWeight:'bold',
        fontSize:14,
        color:'#000',
    },
    origin_container:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:3,
    },
    flag:{
        marginRight:3,
        marginTop:2,
    },
    weight:{
        marginRight:5,
        marginTop:0
    },
    origin:{
        fontSize:12,
        color:'#757575',
    },
    weight_text:{
        fontSize:12,
        color:'#757575',
    },
    desc:{
        flex:1,
        fontSize:13,
        color:'#757575',
    },
    attribute_container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }

});


export default styles;