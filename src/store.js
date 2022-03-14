import { createStore, combineReducers } from "redux";
import { favoritesReducer } from './reducers/favorites'
import { friendsReducer } from './reducers/friends'
import { profileReducer } from './reducers/profile'
//redux-persist imports
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    friends: friendsReducer,
    profile: profileReducer
})

//reduct-persist code
const persistConfig = {
    key: 'persist-key',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)
//end redux-persist code

//original store to export:
//export const store = createStore(rootReducer)

//redux-persist exports
export {store}
export {persistor}