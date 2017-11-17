import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import indexReducer from './reducers/index';

const store = createStore(indexReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
