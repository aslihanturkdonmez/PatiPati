import { StyleSheet } from 'react-native';

function getStyle(){

    return StyleSheet.create({
        container:{
            flexDirection:'row',
            padding:3, 
            marginBottom:15, 
            marginHorizontal:5,
            backgroundColor: '#fbe9eb', 
            borderRadius:20, 
            alignItems:'center',
            paddingHorizontal:5,
            flex: 1,
            justifyContent:'center',
            //backgroundColor:'#676b98'
        },
        text:{
            color:'#8689ac', 
            marginLeft:8,
            fontWeight:'bold',
            fontSize:12,
            marginRight:2,
            //color:'#fbe9eb'
        }

    });
}

export default getStyle;