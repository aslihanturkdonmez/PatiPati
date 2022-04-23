import React from 'react';
import styles from './FavBadge.style';
import Icon from '../Icon';
import TouchableHighlight from '../TouchableHighlight';

const FavBadge = ({fill, container_style, icon_container_style, icon_style, onPress}) => {


  return (
    <TouchableHighlight 
    	styleContainer={[styles.container, container_style]} 
    	styleWrapper={[styles.icon_container, icon_container_style]}
		onPress={onPress}
	>
		
        	<Icon 
				iconSet={'Ionicons'} 
				icon={ fill ? 'heart-sharp' : 'heart-outline'} 
				size={21} 
				color={fill ? '#833C8B' : '#833C8B'} 
				style={icon_style}
			/>
    </TouchableHighlight>
  );
};

export default FavBadge;