import AsyncStorage from '@react-native-async-storage/async-storage';

const setFavorites = async (fav) => {

    try {
        if(!fav || fav.length === 0) return  await AsyncStorage.setItem('@favorites', JSON.stringify([]));

        const jsonValue = JSON.stringify(fav);
        await AsyncStorage.setItem('@favorites', jsonValue);
        
    } catch (error) {
        console.log(error);
    }

}

const getFavorites = async () => {
    try {
        const results= await AsyncStorage.getItem('@favorites');
        if(results){
            return JSON.parse(results);
        }
        return undefined;
    } catch (error) {
        console.log(error);
        
    }
}

export default {getFavorites, setFavorites}