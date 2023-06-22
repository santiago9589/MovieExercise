import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../../../types/Movie';
import { api } from '../../../api/api';
import {START_GET_MOVIE} from "../sliceMovie"

function* updateMovieData(action:PayloadAction<{id:number,Movie:Movie}>) {
    try {
        const data : Movie = yield call(api.updateOneMovie,action.payload.id,action.payload.Movie)
        yield put(START_GET_MOVIE())
    } catch (error) {
       
    }
}

export function* mySagaUpdateMovie() {
    yield takeLatest('movieState/PROSS_UPDATE_MOVIE', updateMovieData);
  }