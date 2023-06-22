import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../api/api';
import { Protagonist } from '../../../types/Protagonist';
import { PROSS_GET_PROTAGONIST } from '../sliceProtagonist';

function* getProtagonistData(action:PayloadAction<Protagonist>) {
    try {
        const data : Protagonist[] = yield call(api.getProtagonists)
        yield put(PROSS_GET_PROTAGONIST(data))
    } catch (error) {
       
    }
}

export function* mySagaGetProtagonist() {
    yield takeLatest('protagonistState/START_GET_PROTAGONIST', getProtagonistData);
  }