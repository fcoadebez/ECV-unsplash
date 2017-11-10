import Unsplash from 'unsplash-js/native';

export const ADD_PHOTOS = 'ADD_PHOTOS';
export const FETCH_PHOTOS_START = 'FETCH_PHOTOS_START';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAIL = 'FETCH_PHOTOS_FAIL';

export function fetchPhotos() {
	return dispatch => {
		dispatch({ type: FETCH_PHOTOS_START });

		const unsplash = new Unsplash({
			applicationId: "855dba33529029988effb2ae198e894d76f2ebe9484067800493f9839f82631f",
			secret: "ec3e1932cee2711b190f9954a242fd8e1e5c5705c727fcb05ca31383888fe3ad",
			callbackUrl: "http://localhost:8080"
		});
		
		unsplash.photos.listPhotos(2, 15, "latest")
		.then(rep => rep.json())
		.then(photos => {
			dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: photos });
		});
	}
}