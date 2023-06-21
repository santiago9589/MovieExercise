import { all } from 'redux-saga/effects';
import { mySagaGetMovie } from './getMovies';
import { mySagaAddMovie } from './addMovies';

export function* rootSaga() {
    yield all([
      mySagaGetMovie(),
      mySagaAddMovie()
    ]);
  }