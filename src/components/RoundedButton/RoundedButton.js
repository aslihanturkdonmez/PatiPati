import React from 'react';
import { Pressable } from 'react-native';
import Icon from '../Icon';
import Text from '../Text';
import getStyle from './RoundedButton.style';

const RoundedButton = ({text, onPress, icon, style, icon_color, text_style }) => {
    const styles=getStyle();

    icon_color ? icon_color : icon_color='#676c98';

    return(
        <Pressable style={[styles.container, style]} onPress={onPress} >
            <Icon iconSet={'MaterialCommunity'} icon={icon} size={18} color={icon_color} />
            {text &&
                <Text style={[styles.text, text_style]}>{text}</Text>
            }
        </Pressable>
    )
}

export default RoundedButton;