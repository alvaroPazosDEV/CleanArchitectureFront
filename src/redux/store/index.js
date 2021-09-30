import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from '../reducers'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'authReducer'
  ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer
);

let persistor = persistStore(store)

export {
  store,
  persistor
}
