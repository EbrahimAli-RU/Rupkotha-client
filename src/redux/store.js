import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import profileReducer from './reducer/profile'
import wishlistReducer from './reducer/wishlist'
import uiReducer from './reducer/ui'
import userReducer from './reducer/user'

const rootReducer = combineReducers({
    profile: profileReducer,
    wishlist: wishlistReducer,
    ui: uiReducer,
    user: userReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;