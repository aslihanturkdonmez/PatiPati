import React from 'react';
import { TextInput } from 'react-native';
import styles from './Input.style';

const Input = ({style, onChangeText, value, placeholder, placeholderTextColor, onPressIn}) => {
    return (  
        <TextInput 
            style={[styles.input, style]}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}   
            onPressIn={onPressIn}     
        />
    );
}
 
export default Input;