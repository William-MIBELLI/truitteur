import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middlewares = [logger, thunk]
const composeEnhancer = compose(applyMiddleware(...middlewares))

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']

}
const persiReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persiReducer, undefined, composeEnhancer)

export const persistore = persistStore(store)