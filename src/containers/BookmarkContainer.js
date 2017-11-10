import { connect } from 'react-redux';
import Bookmark from './../components/Bookmark';
import { bindActionCreators } from 'redux';
import { addFavoritePhoto } from './../actions/PhotosAction';

export default connect(state => {
	return {
		photos: state.photosState,
	};
}, dispatch => {
	return {
		addFavoritePhoto: bindActionCreators(addFavoritePhoto, dispatch),
	}
})(Bookmark);
