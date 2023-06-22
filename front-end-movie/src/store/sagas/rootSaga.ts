import { all } from 'redux-saga/effects';
import { mySagaGetMovie } from './getMovies';
import { mySagaAddMovie } from './addMovies';
import { mySagaUpdateMovie } from './updateMovie';

export function* rootSaga() {
    yield all([
      mySagaGetMovie(),
      mySagaAddMovie(),
      mySagaUpdateMovie()
    ]);
  }