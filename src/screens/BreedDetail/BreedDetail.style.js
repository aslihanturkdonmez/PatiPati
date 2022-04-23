import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'space-between',
        backgroundColor: '#f5f5f5',
    },
    carouselContainer: {
        flexGrow:0,
        backgroundColor: '#f5f5f5',
    },
    dotContainerStyle:{
        alignSelf:'center', 
        position: 'absolute',
        top:Dimensions.get('screen').height / 2.5 - 40,
    },
    dotStyle:{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
    },
    img:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height / 2,
    },
    imageNotFoundContainer:{
        alignItems: 'center', 
        justifyContent:'center', 
        flex:1,
    },
    imageNotFound:{
        fontSize:24,
        color:'#757575'
    },
    modal_container:{
        borderTopLeftRadius:40, 
        borderTopRightRadius:40, 
        paddingHorizontal:30,
        paddingTop:30,
        backgroundColor:'#fff', 
        marginTop:-40,
    },
    name:{
        fontSize:22,
        fontWeight:'bold',
        color:'#000',
    },
    fav_icon_container:{
        right:35, 
        top:30,
    },
    attributionBox_container:{
        flexDirection:'row', 
        justifyContent:'space-evenly', 
        marginTop:10,
    },
    origin:{
        backgroundColor:'#ed6e50'
    },
    weight:{
        backgroundColor:'#7bc09e'
    },
    life_span:{
        backgroundColor:'#7e5bde'
    },
    scroll:{
    },
    description:{
        lineHeight: 18, 
        marginTop: 5,
        color:'#757575',
    },
    readMore:{ 
        textDecorationLine:'underline',
        fontWeight:'500',
        marginTop:3,
        color:'#757575',
    },
    attributions_container:{
        flexDirection:'row', 
        alignItems:'center',
    },
    attributions:{
        fontSize:16,
        textAlign:'left',
        marginRight:10,
        fontWeight:'bold',
        minWidth:100,
        color:'#321736'
    },
    attributionsContainer:{
        justifyContent:'center', 
        marginTop:8, 
        marginBottom:15,
    },
    star_container:{
        flexDirection:'row', 
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginVertical:5,
    },
    button_container:{
        flexDirection:'row',
        paddingBottom: Platform.OS === 'ios' ? 14 : 0,
    },  
    button_wrapper:{
        backgroundColor: '#9F5F80', 
        alignItems: 'center', 
        justifyContent:'center', 
        borderRadius:6, 
        marginBottom:Platform.OS === "ios" ? 30 : 10,
        //marginVertical:10, 
        paddingVertical: 7, 
        flex:1,
    },
    button_text:{
        color:'#fff', 
        fontWeight:'500'
    },
    space:{
        marginHorizontal:5,
    },
    lottie_container:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
        //backgroundColor:'#fbe9ec'

    },
    lottie:{
        width:Platform.OS === "ios" ? Dimensions.get('screen').width / 2 : undefined,
        height: Platform.OS === "ios" ? Dimensions.get('screen').height / 3 : undefined,
        alignSelf:'center',
    },
    goBack:{
        position:'absolute', 
        zIndex:1, 
        padding:10, 
        paddingTop:Platform.OS === "ios" ? 44 : StatusBar.height
    },





});

export default styles;