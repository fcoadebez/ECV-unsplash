import React from 'react';
import {View, Dimensions, TouchableHighlight, TouchableOpacity, Image, Text, FlatList, Component} from 'react-native';

class Bookmark extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			imageSelected: [],
		};
		
	}

	_fullScreenImage = (item) => {
		this.setState({imageSelected: item});
	}

	_deleteFullScreenImage = () => {
		this.setState({imageSelected: []});
	}

	_defavOnLongPress = (itemToDefav) => {
		this.props.addFavoritePhoto(itemToDefav);
	}

	render() {
		const {height, width} = Dimensions.get('window');

			if (this.state.imageSelected.length < 1) {
				return (
					<FlatList style={{marginTop: 20}}
					numColumns={2}
					keyExtractor={(item, index) => index}
					data={this.props.photos.favList}
					renderItem={({item}) => 
					<TouchableOpacity onPress={() => this._fullScreenImage(item)} onLongPress={() => this._defavOnLongPress(item)} activeOpacity={0.3}>
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

export default Bookmark;