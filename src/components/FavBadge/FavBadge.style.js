import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-end',
    },
    icon_container:{
        backgroundColor:'white', 
        padding:4, 
        borderRadius:30,             
        elevation: 8,
        position: 'absolute', 
        top: -6, 
        right: -7, 
        zIndex: 1,
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.2,
        shadowRadius:4,
        shadowColor:'#833C8B',

    }
});

export default styles;