import { combineReducers } from 'redux';
import navState from './navigatorReducer';
import photosState from './PhotosReducer';

const state = combineReducers({
	nav: navState,
	photosState: photosState,
});

export default state;
