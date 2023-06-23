import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../../../types/Movie';
import { api } from '../../../api/api';
import {PROSS_GET_MOVIE} from "../sliceMovie"

function* getMovieData(action:PayloadAction<Movie>) {
    try {
        // const data : Movie[] = yield call(api.getMovies)
        const data : Movie[] = yield call(api.getMoviesMock)
        yield put(PROSS_GET_MOVIE(data))
    } catch (error) {
       
    }
}

export function* mySagaGetMovie() {
    yield takeLatest('movieState/START_GET_MOVIE', getMovieData);
  }