import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import profileReducer from './reducer/profile'
import wishlistReducer from './reducer/wishlist'
const rootReducer = combineReducers({
    profile: profileReducer,
    wishlist: wishlistReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;