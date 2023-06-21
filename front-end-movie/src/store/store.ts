import { configureStore } from '@reduxjs/toolkit';
import appReducer from './combineReducers';
import createSagaMiddleware from 'redux-saga';
import {mySagaGetMovie} from "./sagas/getMovies"

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
    reducer:{
        appReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(mySagaGetMovie);