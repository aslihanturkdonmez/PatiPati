import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import styles from './AttributionBox.style';

const AttributionBox = ({attribution, value, styleContainer }) => {
    return (  
        <View style={[styles.container , styleContainer]}>
            <Text style={styles.attribution}>{attribution}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}
 
export default AttributionBox;