import { all } from 'redux-saga/effects';
import { mySagaGetMovie } from './getMovies';
import { mySagaAddMovie } from './addMovie';
import { mySagaUpdateMovie } from './updateMovie';
import { mySagaDeleteMovie } from './deleteMovie';

export function* rootSaga() {
    yield all([
      mySagaGetMovie(),
      mySagaAddMovie(),
      mySagaUpdateMovie(),
      mySagaDeleteMovie()
    ]);
  }