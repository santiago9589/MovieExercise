import { configureStore } from '@reduxjs/toolkit';
import appReducer from './combineReducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
    reducer:{
        appReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);