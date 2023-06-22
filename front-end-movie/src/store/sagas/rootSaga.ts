import { all } from 'redux-saga/effects';
import { mySagaGetMovie } from './getMovies';
import { mySagaAddMovie } from './addMovie';
import { mySagaUpdateMovie } from './updateMovie';
import { mySagaDeleteMovie } from './deleteMovie';
import { mySagaAddProtagonist } from './addProtagonist';
import { mySagaDeleteProtagonist } from './deleteProtagonist';
import { mySagaGetProtagonist } from './getProtagonist';
import { mySagaUpdateProtagonist } from './updateProtagonist';

export function* rootSaga() {
  yield all([
    mySagaGetMovie(),
    mySagaAddMovie(),
    mySagaUpdateMovie(),
    mySagaDeleteMovie(),

    mySagaAddProtagonist(),
    mySagaDeleteProtagonist(),
    mySagaGetProtagonist(),
    mySagaUpdateProtagonist(),
  ]);
}