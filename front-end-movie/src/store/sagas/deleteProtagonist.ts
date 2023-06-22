import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../api/api';
import {START_GET_PROTAGONIST} from "../sliceProtagonist"

function* deleteProtagonistData(action:PayloadAction<{id:number}>) {
    try {
        const data : string = yield call(api.deleteProtagonist,action.payload.id)
        yield put(START_GET_PROTAGONIST())
    } catch (error) {
       
    }
}

export function* mySagaDeleteProtagonist() {
    yield takeLatest('protagonistState/PROSS_DELETE_PROTAGONIST', deleteProtagonistData);
  }