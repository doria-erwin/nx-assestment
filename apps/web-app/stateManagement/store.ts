import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    ThunkAction
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { setLoggingOut } from './modules/authentication';
import * as reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage
}
const appReducers = combineReducers(reducers);
const rooReducers = (
    state: ReturnType<typeof appReducers>,
    action: AnyAction,
) => {
    if (action.type === setLoggingOut.type) {
        return appReducers(undefined, { type: undefined });
    }
    return appReducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rooReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }).concat(thunk)
});
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
