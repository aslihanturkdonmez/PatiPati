import React from 'react';
import { Text } from 'react-native';
import styles from './Text.style';

const MyText = ({children, style, numberOfLines, onTextLayout}) => {
    return (
        <Text 
          style={[styles.text, style]}
          numberOfLines={numberOfLines}
          onTextLayout={onTextLayout}
        
        >{children}</Text>
      );
}
 
export default MyText;