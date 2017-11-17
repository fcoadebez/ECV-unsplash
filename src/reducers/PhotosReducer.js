import { 
	ADD_PHOTOS,
	FETCH_PHOTOS_START,
	FETCH_PHOTOS_SUCCESS,
	FETCH_PHOTOS_FAIL,
} from './../actions/PhotosAction';

import {
	ADD_FAVORITE_PHOTO,
} from './../actions/FavoriteAction';

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
				...state,
				status: 'success',
				list: action.payload,
			};
		case FETCH_PHOTOS_FAIL:
			return {
				...state,
				status: 'fail',
			};
		case ADD_FAVORITE_PHOTO:
			if (!state.favList.includes(action.payload)) {
				return {
					...state,
					favList: [ ...state.favList, action.payload ],
				};
			} else {
				return {
					...state,
					favList: state.favList.filter(photos => photos !== action.payload),
				};
			}
		default:
			return state;
	}
}
