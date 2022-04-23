import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './CatCard.style';
import Text from '../Text';
import Image from '../Image';
import FavBadge from '../FavBadge';
import Icon from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../store/actions/FavoritesActions';

const CatCard = ({cat, onPress }) => {

    const dispatch = useDispatch();
    const favFlag =  useSelector(state => state.favorites.favList.find(fav => fav.id === cat.id));
    

	const fav = () => {
		if(!favFlag) {
            dispatch(addFav(cat));
		}else{
            dispatch(removeFav(cat.id));
        }
	}
    
    return ( 

                
        /* !( fromFavorites === true && !favFlag) && */
        <TouchableWithoutFeedback onPress={onPress}>
            <View  style={[styles.container]}>

                   <FavBadge 
                       fill={favFlag}
                       onPress={fav}            
                   />
                <View style={styles.inner_container}>
                    {
                        cat.image?.url &&
                        <Image 
                            source={{uri: cat.image.url}}
                            style={[styles.img ]}
                        />
                    }
                    <View style={styles.desc_container}>
                        <Text style={styles.name}>{cat.name}</Text>
                        <View style={styles.attribute_container}>
                            {
                                cat.origin &&
                                <View style={styles.origin_container}>
                                    <Icon 
                                        iconSet={'MaterialCommunity'}
                                        icon={'flag-outline'}
                                        size={16}
                                        color='#4e4e4e'
                                        style={styles.flag}
                                        />
                                    <Text style={styles.origin}>{cat.origin}</Text>
                                </View>
                            }
                            {
                                cat.weight?.metric &&
                                <>
                                <Text >{"  -  "}</Text>
                                    <View style={styles.origin_container}>
                                        <Icon 
                                            iconSet={'MaterialCommunity'}
                                            icon={'weight-kilogram'}
                                            size={18}
                                            color='#4e4e4e'
                                            style={styles.weight}
                                            />
                                        <Text style={styles.weight_text}>{cat.weight?.metric}</Text>
                                    </View>
                                </>
                            }
                        </View>
                        {
                            cat.description &&
                            <Text style={styles.desc} numberOfLines={2}>{cat.description}</Text>
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
     );
}
 
export default CatCard;