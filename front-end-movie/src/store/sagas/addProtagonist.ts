import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../api/api';
import {START_GET_PROTAGONIST} from "../sliceProtagonist"
import { Protagonist } from '../../../types/Protagonist';

function* addProtagonistData(action:PayloadAction<Protagonist>) {
    try {
        const data : Protagonist = yield call(api.addProtagonist,action.payload)
        yield put(START_GET_PROTAGONIST())
    } catch (error) {
       
    }
}

export function* mySagaAddProtagonist() {
    yield takeLatest('protagonistState/PROSS_ADD_PROTAGONIST', addProtagonistData);
  }