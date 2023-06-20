import { configureStore } from '@reduxjs/toolkit';
import appReducer from './combineReducers';

export const store = configureStore({
    reducer:{
        appReducer
    }
})