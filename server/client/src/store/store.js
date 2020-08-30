import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';

const initiateState = {};
const middlware = [thunk];

const store = createStore(rootReducer,
    initiateState,
    composeWithDevTools(applyMiddleware(...middlware)))

export default store;