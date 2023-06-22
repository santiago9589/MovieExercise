import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../api/api';
import {START_GET_MOVIE} from "../sliceMovie"

function* deleteMovieData(action:PayloadAction<{id:number}>) {
    try {
        const data : string = yield call(api.deleteOneMovie,action.payload.id)
        yield put(START_GET_MOVIE())
    } catch (error) {
       
    }
}

export function* mySagaDeleteMovie() {
    yield takeLatest('movieState/PROSS_DELETE_MOVIE', deleteMovieData);
  }