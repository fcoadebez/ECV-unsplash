import { connect } from 'react-redux';
import News from './../components/News';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from './../actions/PhotosAction';
import { addFavoritePhoto } from './../actions/FavoriteAction';

export default connect(state => {
	return {
		photos: state.photosState,
	};
}, dispatch => {
	return {
		fetchPhotos: bindActionCreators(fetchPhotos, dispatch),
		addFavoritePhoto: bindActionCreators(addFavoritePhoto, dispatch),
	}
})(News);
