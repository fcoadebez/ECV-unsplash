import Unsplash from 'unsplash-js/native';

export const ADD_FAVORITE_PHOTO = 'ADD_FAVORITE_PHOTO';

export function addFavoritePhoto(photo) {
	return dispatch => {
		dispatch({ type: ADD_FAVORITE_PHOTO, payload: photo });
	}
}