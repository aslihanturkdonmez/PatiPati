import React, { useCallback, useEffect, useState } from 'react';
import {  View, Pressable, Dimensions, Linking } from 'react-native';
import api from '../../api';
import { AttributionBox, FavBadge, Icon, Image, RoundedButton, Text, TouchableHighlight } from '../../components';
import styles from './BreedDetail.style';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../store/actions/FavoritesActions';
import LottieView from 'lottie-react-native';


const BreedDetail = ({route, navigation}) => {
    const cat=route.params;
    const favFlag = useSelector(state => state.favorites.favList.find(fav => fav.id === cat.id));
    const dispatch = useDispatch();

    const [catImages, setCatImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeSlide, setActiveSlide] = useState(0);
    const [readMore, setReadMore] = useState(undefined);
    const [textShown, setTextShown] = useState(false);

    useEffect(() => {
      getImages();
      
    }, [])

    const getImages = async() => {
        const {data:img}= await api.fetchBreedImages(cat.id, 6);
        setCatImages(img);
        setLoading(false);
    }

    const renderHeaderComponent = () => {
        return (
            <Pressable onPress={()=> navigation.goBack()} style={styles.goBack}>
                <Icon 
                    iconSet={'Ionicons'}
                    icon='md-chevron-back-outline'
                    size={40}
                    color='#757575'
                />
            </Pressable>
        )
    }

    const fav = () => {
		if(!favFlag) {
			dispatch(addFav(cat));
		}else{
            dispatch(removeFav(cat.id));
        }
	}

    const paginationCarousel = () => {
        return (
            <Pagination
              dotsLength={catImages.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.dotContainerStyle}
              dotStyle={styles.dotStyle}
              inactiveDotOpacity={0.5}
              inactiveDotScale={0.6}
            />
        );
    }

    const renderCarousel = ({item}) => {
        return (
            <Image 
                component={"FastImage"}
                source={{uri: item.url}}
                style={styles.img}
            />
        );
    }

    const onTextLayout =  useCallback(e=> {
        setReadMore(e.nativeEvent.lines.length >= 4);
    },[textShown]);

    const toggleNumberOfLines = () => { 
        setTextShown(!textShown);
    }

    const renderRateComponent = (star, color, icon) => {
        let starArray=[];
            for (let i = 0; i < star; i++) {                
                starArray.push(<Icon 
                    iconSet={'MaterialCommunity'}
                    icon={icon}
                    size={20}
                    color={color}
                    key={i}
                />)
            }
            return starArray;
    }

    const redirect = async (url) => {
        await Linking.openURL(url);
    } 
    
    if(loading){
        return (
            <View style={styles.lottie_container}>
            <LottieView 
              source={require('../../resources/loading.json')}
              autoPlay
              loop
              style={styles.lottie}
            />
          </View>
        )
    }
    

    return (  
        <>
        {renderHeaderComponent()}
        <View style={styles.container}>
            {
                catImages.length === 0 ?
                <View style={styles.imageNotFoundContainer}>
                    <Text style={styles.imageNotFound}>Image not found</Text>
                </View>
                :
                <Carousel
                    data={catImages}
                    renderItem={renderCarousel}
                    sliderWidth={Dimensions.get('screen').width}
                    itemWidth={Dimensions.get('screen').width}
                    containerCustomStyle={styles.carouselContainer}
                    onSnapToItem={(index) => setActiveSlide(index)}
                    itemHeight={Dimensions.get('screen').height / 2.5}
                />
            }   
            
            {paginationCarousel()}

            <View style={[styles.modal_container]}>
                <FavBadge 
                    fill={favFlag}
                    onPress={fav} 
                    icon_container_style={styles.fav_icon_container}
                />
                <Text style={styles.name}>{cat.name}</Text>
                <View style={styles.attributionBox_container}>
                    {
                        cat.origin &&
                        <AttributionBox attribution="Origin" value={cat.origin} styleContainer={styles.origin} />
                    }
                    {
                        cat.weight?.metric &&
                        <AttributionBox attribution="Weight" value={cat.weight.metric+ "  KG"} styleContainer={styles.weight} />
                    }
                    {
                        cat.life_span &&
                        <AttributionBox attribution="Life Span" value={cat.life_span} styleContainer={styles.life_span} />
                    }
                </View>

                    <Text 
                        style={styles.description} 
                        onTextLayout={onTextLayout} 
                        numberOfLines={ textShown ? undefined : 4}>
                            {cat.description}
                    </Text>

                    {
                        readMore &&

                        <TouchableHighlight underlayColor='transparent' onPress={toggleNumberOfLines}>
                            <Text style={styles.readMore}>
                                {textShown ? 'Read less' : 'Read more'}
                            </Text>
                        </TouchableHighlight>
                    }

                <View style={styles.attributionsContainer}>
                    {
                        cat.adaptability &&
                        <View style={styles.star_container}>
                            <Text style={styles.attributions}>Adaptability</Text>
                            <View style={styles.attributions_container}>
                                {renderRateComponent(cat.adaptability, '#ba70c2', 'star')}
                                {renderRateComponent((5-cat.adaptability), '#ba70c2', 'star-outline')}
                            </View>
                        </View>
                    }

                    {
                        cat.grooming &&
                        <View style={styles.star_container}>
                            <Text style={styles.attributions}>Grooming</Text>
                            <View style={styles.attributions_container}>
                                {renderRateComponent(cat.grooming, '#ba70c2', 'star')}
                                {renderRateComponent((5-cat.grooming), '#ba70c2', 'star-outline')}
                            </View>
                        </View>
                    }

                    {
                        cat.energy_level &&
                        <View style={styles.star_container}>
                            <Text style={styles.attributions}>Energy</Text>
                            <View style={styles.attributions_container}>
                                {renderRateComponent(cat.energy_level, '#ba70c2', 'star')}
                                {renderRateComponent((5-cat.energy_level), '#ba70c2', 'star-outline')}
                            </View>
                        </View>
                    }

                    {/* 
                    <View style={styles.star_container}>
                        <Text style={styles.attributions}>Social Needs</Text>
                        <View style={styles.attributions_container}>
                            {renderRateComponent(cat.social_needs, '#ba70c2', 'star')}
                            {renderRateComponent((5-cat.social_needs), '#ba70c2', 'star-outline')}
                        </View>
                    </View> */}
                </View>

                <View style={styles.button_container}>
                    <RoundedButton 
                        text={"VCA"}
                        icon="hospital-building"
                        onPress={() => redirect(cat.vcahospitals_url)}
                    />
                    <RoundedButton 
                        text={"Wikipedia"}
                        icon="wikipedia"
                        onPress={() => redirect(cat.wikipedia_url)}
                    />
                    <RoundedButton 
                        text={"CFA"}
                        icon={"office-building-marker"}
                        onPress={() => redirect(cat.cfa_url)}
                    />
                </View>
            </View>
        </View>
        </>
    );
}
 
export default BreedDetail;