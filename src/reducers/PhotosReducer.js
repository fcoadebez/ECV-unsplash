import { 
	ADD_PHOTOS,
	FETCH_PHOTOS_START,
	FETCH_PHOTOS_SUCCESS,
	FETCH_PHOTOS_FAIL,
	ADD_FAVORITE_PHOTO,
} from './../actions/PhotosAction';

const initialState = {
	status: '',
	list: [],
	favList: [],
};

export default function photosState(state = initialState, action) {

	switch (action.type) {
		case FETCH_PHOTOS_START:
		return {
			...state,
			status: 'loading',
		};
		case FETCH_PHOTOS_SUCCESS:
		return {
			status: 'success',
			list: action.payload,
		};
		case FETCH_PHOTOS_FAIL:
		return {
			...state,
			status: 'fail',
		};
		case ADD_FAVORITE_PHOTO:
		return {
			status: 'success',
			favList: [ ...state.favList, action.payload ],
		};
		default:
		return state;
	}
}
