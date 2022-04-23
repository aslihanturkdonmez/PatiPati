import React from 'react';
import { TouchableHighlight, View } from 'react-native';

const MyTouchableHighlight = ({children, activeOpacity=0.9, underlayColor='#DDDDDD', styleWrapper, styleContainer, onPress}) => {
    return(
        <TouchableHighlight
            activeOpacity={activeOpacity}
            underlayColor={underlayColor}
            style={styleWrapper}
            onPress={onPress}
        >
            <View style={styleContainer}>
                {children}
            </View>
        </TouchableHighlight>
    )
}

export default MyTouchableHighlight;