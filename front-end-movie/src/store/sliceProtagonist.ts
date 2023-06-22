import { createSlice } from "@reduxjs/toolkit"
import { Protagonist } from "../../types/Protagonist"
import type { PayloadAction } from '@reduxjs/toolkit'


interface protagonistState {
    protagonists: Protagonist[]
}

const initialAppState: protagonistState = {
    protagonists: []
}

const protagonistSlice = createSlice({
    name: "protagonistState",
    initialState: initialAppState,
    reducers: {
        START_GET_PROTAGONIST(state){
            state
        },
        PROSS_GET_PROTAGONIST(state,action: PayloadAction<Protagonist[]>){
            state.protagonists = action.payload
        },
        PROSS_ADD_PROTAGONIST(state, action: PayloadAction<Protagonist>) {
            state
            action
        },
        PROSS_UPDATE_PROTAGONIST(state, action:PayloadAction<{id:number,Movie:Protagonist}>) {
            state
            action
        },
        PROSS_DELETE_PROTAGONIST(state, action: PayloadAction<{id:number}>) {
            state
            action
        },
    
    }
})
export const { START_GET_PROTAGONIST,PROSS_UPDATE_PROTAGONIST,PROSS_ADD_PROTAGONIST,PROSS_DELETE_PROTAGONIST,PROSS_GET_PROTAGONIST } = protagonistSlice.actions
export default protagonistSlice.reducer