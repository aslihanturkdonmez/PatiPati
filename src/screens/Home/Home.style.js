import { StyleSheet , Platform, Dimensions, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f7d4d8',
        paddingTop:Platform.OS === "ios" ? 44 : StatusBar.height,
    },
    input_container:{
        backgroundColor:'#fff',
        borderRadius:14,
        flexGrow:1,
        elevation:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.2,
        shadowColor:'#833C8B',
        shadowRadius:4,
    },
    input:{
        paddingHorizontal:18,
        paddingVertical:Platform.OS === "android" ? 8 : 12,
        flexGrow:1,
        flex:1,
    },
    item_seperator: {
        flex:1, 
        margin:3, 
        backgroundColor:'white',
    },
    drawer_icon_container:{ 
        alignItems:'center', 
        justifyContent:'center', 
    },
    drawer_icon:{
        alignSelf:'center',
    },
    clear_search:{
        justifyContent:'flex-end', 
        marginRight:10,
    },
    header_container:{
        backgroundColor:'#fff', 
        justifyContent:'space-between', 
        alignItems:'center', 
        backgroundColor:'#f7d4d8' 
    },
    header_img:{
        width:150, 
        height:100,
        backgroundColor:'#f7d4d8',
    },
    header_favorites_img:{
        width:148,
        height:70, 
        marginTop: 0,
        backgroundColor:'#f7d4d8',
    },
    lottie_container_modal:{
        alignItems:'center', 
        justifyContent:'center',
        flex:1, 
        backgroundColor:'rgba(255, 255, 255, 0.6)'
    },
    search_container:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginVertical:20, 
        marginHorizontal:20
    },
    search_icon_wrapper:{
        justifyContent: 'center', 
        marginLeft:5,
    },
    breeds_length:{
        marginRight:25
    },
    lottie_container:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
    },
    lottie:{
        width:Platform.OS === "ios" ? Dimensions.get('screen').width / 2 : undefined,
        height: Platform.OS === "ios" ? Dimensions.get('screen').height / 3 : undefined,
        alignSelf:'center',

    },
    emptyListContainer:{
        alignItems:'center', 
        justifyContent:'center', 
        padding:20,
    },
    emptyListInnerContainer:{
        backgroundColor:'#f0dbdd', 
        padding:30, 
        borderRadius:14, 
        elevation:10,
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.2,
        shadowColor:'#833C8B',
        shadowRadius:4,

    },
    emptyListText:{
        fontSize:18,
        color:'#b181a0',
        fontWeight:'bold',
        textAlign:'center',
    },
    listFooterContainer:{ 
        margin: 10 
    },



});

export default styles;