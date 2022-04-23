import React, { useEffect, useState } from 'react';
import { View, FlatList, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { CatCard, Icon, Text } from '../../components';
import { storage } from '../../utils';
import styles from './Favorites.style';

const Favorites = ({navigation}) => {
    const favs=useSelector(state => state.favorites.favList);
    const [favBreeds, setFavBreeds] = useState(favs);
    const [refreshLoading, setRefreshLoading] = useState(false);
    
    useEffect(() => {
        setFavBreeds(favs);
    }, [favs]);
    
    const onRefresh = async() => {
        setRefreshLoading(true);
        const fav=await storage.getFavorites();
        setFavBreeds(fav);
        setRefreshLoading(false);
    }
    
    const onPressCatCard = (item) => {
        navigation.navigate('BreedDetail', item)
    }
    
    const renderHeaderComponent = () => {
        return (
            <Pressable 
            onPress={()=> navigation.goBack()} 
            style={styles.header_container}>
                <Icon 
                    iconSet={'Ionicons'}
                    icon='md-chevron-back-outline'
                    size={33}
                    color='#833C8B'
                />
                <Text style={styles.header_text}>Favorite Paws</Text>
                <Icon 
                    iconSet={'Ionicons'}
                    icon='md-chevron-back-outline'
                    size={40}
                    color='transparent'
                />
            </Pressable>
        )
    }
    
    const renderListEmptyComponent = () => {
        return (
            <View style={styles.emptyListContainer}>
                <Text style={styles.emptyListText} >You don't have any favorites yet!</Text>
            </View>
        )
    }
   
    const renderItem = ({item}) => <CatCard cat={item} onPress={()=>onPressCatCard(item)} />

    return (  
        <View style={styles.container}>
            {renderHeaderComponent()}
            <FlatList 
                data={favBreeds}
                renderItem={renderItem}
                ListEmptyComponent={renderListEmptyComponent}
                refreshing={refreshLoading}
                onRefresh={onRefresh}
                ListFooterComponent={()=> <View style={{margin:10}} />}
            />
        </View>
    );
};
 
export default Favorites;