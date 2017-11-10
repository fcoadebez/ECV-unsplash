import { connect } from 'react-redux';
import News from './../components/News';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from './../actions/PhotosAction';

export default connect(state => {
	return {
		photos: state.photosState,
	};
}, dispatch => {
	return {
		fetchPhotos: bindActionCreators(fetchPhotos, dispatch),
	}
})(News);
