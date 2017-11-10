import React from 'react';
import {View, Text} from 'react-native';

class Bookmark extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			imageSelected: [],
		};
	}
	render() {
		const { photos } = this.props;
		return (
			<View><Text>Bookmark</Text></View>
			);
		
	}

}

export default Bookmark;
