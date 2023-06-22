import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../../../types/Movie';
import { api } from '../../../api/api';
import {START_GET_MOVIE} from "../sliceMovie"

function* addMovieData(action:PayloadAction<Movie>) {
    try {
        const data : Movie = yield call(api.addOneMovie,action.payload)
        yield put(START_GET_MOVIE())
    } catch (error) {
       
    }
}

export function* mySagaAddMovie() {
    yield takeLatest('movieState/PROSS_ADD_MOVIE', addMovieData);
  }