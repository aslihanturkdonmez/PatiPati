import React, { useEffect, useState } from 'react';
import { View, FlatList, Pressable, ActivityIndicator, Modal } from 'react-native';
import { CatCard, Icon, Image, Input, Text, TouchableHighlight, } from '../../components';
import styles from './Home.style';
import api from '../../api';
import LottieView from 'lottie-react-native';

const Home = ({ navigation }) => {

	const [breeds, setBreeds] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refreshLoading, setRefreshLoading] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [page, setPage] = useState(0);
	const [breedsLimit, setBreedsLimit] = useState(10)
	const [breedsArrayHolder, setBreedsArrayHolder] = useState([]);
	const [searching, setSearching] = useState(false);
	const [searchLoading, setSearchLoading] = useState(false);
	const [endOfList, setEndOfList] = useState(false);

	useEffect(() => {
		getBreeds();
	}, []);

	const getBreeds = async () => {

		const { data } = await api.fetchBreeds(page, breedsLimit);
		if(!data.length) setEndOfList(true);
		setBreeds([...breeds, ...data]);
		setLoading(false);
		setPage(page + 1);
		setBreedsArrayHolder([...breeds, ...data]);
	}

	const onRefresh = async () => {
		setSearchText("");
		setRefreshLoading(true);
		await getBreeds();
		setRefreshLoading(false);
	}

	const searchBreed = async () => {

		setEndOfList(true);

		if (!searchText || searchText.trim() === "") {
			setBreeds(breedsArrayHolder);
			setSearching(false);
			setEndOfList(false);
			return;
		}

		setSearchLoading(true);
		const { data } = await api.fetchSearchBreed(searchText);

		if(!data.length) setEndOfList(true);

		if (!data) return;

		const mutData = Array.from(data);

		await Promise.all(mutData.map(async (d) => {

			const { data: image } = await api.fetchSpesificImage(d.id === "pers" ? "" : (d.reference_image_id || ""));
			d["image"] = { url: image.url };

			return d;
		}));

		setBreeds(mutData);
		setSearching(true);
		setSearchLoading(false);
	}

	const itemSeparatorComponent = () => {
		return (
			<View style={styles.item_seperator} />
		)
	}

	const onPressIn = () => {
		setSearching(false);
	}

	const renderSearchComponent = () => {
		return (
			<View style={styles.search_container}>
				<View style={styles.input_container}>
					<Input
						placeholder="Search Breed"
						style={styles.input}
						placeholderTextColor="#808080"
						onChangeText={setSearchText}
						value={searchText}
						onPressIn={onPressIn}
					/>
					{searching && searchText && searchText !== "" ?
						<Text style={styles.breeds_length}>({breeds.length} breeds)</Text>
						:
						undefined
					}
					{
						searchText !== "" &&
						<Pressable style={styles.clear_search} onPress={() => setSearchText("")}>
							<Icon
								iconSet={"MaterialCommunity"}
								icon="close-thick"
								size={25}
								color={"#b4b7c6"}
							/>
						</Pressable>
					}

				</View>
				<TouchableHighlight onPress={searchBreed} styleWrapper={styles.search_icon_wrapper} underlayColor={'transparent'}>
					<Icon
						iconSet={'Ionicons'}
						icon='search'
						color={'#595959'}
						size={26}
					/>
				</TouchableHighlight>
			</View>
		)
	}

	const renderHeader = () => {
		return (
			<View style={styles.header_container}>
				<Image
					source={require('../../resources/appLogo.png')}
					style={styles.header_img}
					resizeMode='contain'
				/>
				<TouchableHighlight
					onPress={() => navigation.navigate('Favorites')}
					underlayColor="transparent"
				>
					<Image
						source={require('../../resources/patileFav.png')}
						style={styles.header_favorites_img}
						resizeMode='contain'
					/>
				</TouchableHighlight>
				<Text style={{ marginTop: 15, color: '#757575', }}>"Everything about the cats"</Text>
			</View>
		)
	}

	const onPressCatCard = (item) => {
		navigation.navigate('BreedDetail', item);
	}

	const renderListEmptyComponent = () => {
		return (
			breedsArrayHolder.length && !breeds.length ?
			<View style={styles.emptyListContainer}>
				<View style={styles.emptyListInnerContainer}>
					<Text style={styles.emptyListText}>No Results Found!</Text>
				</View>
			</View>
			:
			<View style={styles.emptyListContainer}>
				<View style={styles.emptyListInnerContainer}>
					<Text style={styles.emptyListText}>Failed to load data.{'\n'}Please try again later.</Text>
				</View>
			</View>

		)
	}

	const renderListFooterComponent = () => {
		return (
			!endOfList && 
			<View style={styles.listFooterContainer}>
				<ActivityIndicator size={'small'} color="#999999" />
			</View>
		)
	}

	const onEndReached = () => {
		if(endOfList) return;
		getBreeds();
	}

	const renderItem = ({ item, index }) => <CatCard cat={item} index={index} onPress={() => onPressCatCard(item)} />


	const renderSearchLoadingComponent = () => {
		return (
			<Modal
				animationType="fade"
				transparent={true}
				visible={searchLoading}
			>
				<View style={styles.lottie_container_modal}>
					<LottieView
						source={require('../../resources/loading.json')}
						autoPlay
						loop
						style={styles.lottie}
					/>
				</View>
			</Modal>
		)
	}

	if (loading) {
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
		<View style={styles.container}>
			{renderHeader()}
			{renderSearchComponent()}
			{
				searchLoading ?
					renderSearchLoadingComponent()
					:
					<FlatList
						renderItem={renderItem}
						data={breeds}
						/* keyExtractor={(item) => item.id} */
						numColumns={1}
						ItemSeparatorComponent={itemSeparatorComponent}
						onRefresh={onRefresh}
						refreshing={refreshLoading}
						onEndReached={onEndReached}
						onEndReachedThreshold={0.1}
						ListFooterComponent={renderListFooterComponent}
						extraData={breeds}
						ListEmptyComponent={renderListEmptyComponent}
					/>
			}
		</View>
	)
}

export default Home;