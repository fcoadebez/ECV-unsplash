import React from 'react';
import {View, Dimensions, TouchableHighlight, TouchableOpacity, Image, Text, FlatList, ActivityIndicator, Component} from 'react-native';
import Unsplash from 'unsplash-js/native';

class News extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			imageSelected: [],
		};
	}

	componentDidMount() {
		this.props.fetchPhotos();
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.photos);
	}

	_fullScreenImage = (item) => {
		this.setState({imageSelected: item});
	}

	_deleteFullScreenImage = () => {
		this.setState({imageSelected: []});
	}

	_favOnLongPress = (itemToFav) => {
		this.props.addFavoritePhoto(itemToFav);
	}

	render() {
		const { photos } = this.props;

		const {height, width} = Dimensions.get('window');

		if (photos.status === 'loading') {
			return (
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<ActivityIndicator
				size="large"
				color="#0000ff"
				/>
				</View>
				);
		} else {
			if (this.state.imageSelected.length < 1) {
				return (
					<FlatList style={{marginTop: 20}}
					numColumns={2}
					keyExtractor={(item, index) => index}
					data={photos.list}
					renderItem={({item}) => 
					<TouchableOpacity onPress={() => this._fullScreenImage(item)} onLongPress={() => this._favOnLongPress(item)} activeOpacity={0.3}>
					<Image resizeMode='cover' source={{uri: item.urls.small}} style={{width: width/2, height: width/2}}/>
					</TouchableOpacity>}
					/>
					);
			} else {
				return (
					<View>
					<TouchableHighlight
					onPress={this._deleteFullScreenImage}
					style={{zIndex: 2}}>
					<Image
					source={require('../image/close.png')} 
					style={{width: 60, height: 60, position: 'absolute', top: 20, left: 20, zIndex: 2}}
					/>
					</TouchableHighlight>

					<Image 
					resizeMode='contain' 
					source={{uri: this.state.imageSelected.urls.regular}} 
					style={{width: width, height: height, zIndex: 1}}/>

					</View>
					);
			}
		}
		
		
	}

}

export default News;
