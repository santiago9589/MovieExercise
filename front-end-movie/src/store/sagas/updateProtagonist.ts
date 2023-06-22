import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../api/api';
import { Protagonist } from '../../../types/Protagonist';
import { START_GET_PROTAGONIST } from '../sliceProtagonist';

function* updateProtagonistData(action:PayloadAction<{id:number,Protagonist:Protagonist}>) {
    try {
        const data : Protagonist = yield call(api.updateProtagonist,action.payload.id,action.payload.Protagonist)
        yield put(START_GET_PROTAGONIST())
    } catch (error) {
       
    }
}

export function* mySagaUpdateProtagonist() {
    yield takeLatest('protagonistState/PROSS_UPDATE_PROTAGONIST', updateProtagonistData);
  }