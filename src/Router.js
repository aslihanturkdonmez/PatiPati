import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Favorites, BreedDetail } from './screens';
import {LogBox} from "react-native";
import { storage } from './utils';
import { useDispatch } from 'react-redux';
import {  setFavs } from './store/actions/FavoritesActions';
import SplashScreen from 'react-native-splash-screen'


LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
])


const Stack = createNativeStackNavigator();

const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getFavs();
        SplashScreen.hide();
    }, []);


    const getFavs = async() => {
        const favs=await storage.getFavorites();
        dispatch(setFavs(favs));
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name='Home' 
                    component={Home} 
                />
                <Stack.Screen 
                    name="Favorites" 
                    component={Favorites}
                />
                <Stack.Screen 
                    name="BreedDetail" 
                    component={BreedDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}
 
export default Router;

