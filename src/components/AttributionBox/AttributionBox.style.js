import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        paddingVertical:10,
        marginVertical:10,
        marginHorizontal:10,
        minWidth:100,
        elevation:8,
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.2,
        shadowColor:'#833C8B',
        shadowRadius:4,
    },
    attribution:{
        fontSize:14,
        color:'#fff'
    },
    value:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:15,
        marginTop:2,
        textAlign:'center',
    }
});


export default styles;
