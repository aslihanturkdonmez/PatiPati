import React, { useState } from 'react';
import FastImage from 'react-native-fast-image'
import { Image, View, ActivityIndicator } from 'react-native'
import styles from './Image.style';

const MyImage = ({source, style, resizeMode, component, style_container}) => {
    const [loading, setLoading] = useState(true);
    const [imgLoading, setImgLoading] = useState(true);

    return ( 
        component === "FastImage" ?
        <View style={[styles.defaultStyle, style]}>
            {loading ? <ActivityIndicator size="small" color="white" /> : null}
            <FastImage 
                source={source}
                style={[styles.image, style]}
                onLoadEnd={() => {setLoading(false)}}
            />
        </View>
        :
        <View style={[{alignItems:'center', justifyContent:'center'}, style]}>
            {loading ? <ActivityIndicator size="small" color="#999"/> : null}
                <Image 
                    source={source}
                    style={[style, styles.image]}
                    resizeMode={resizeMode}
                    onLoadEnd={() => {setLoading(false)}}
                />
            
        </View>
     );
}
 
export default MyImage;
