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
       
        PROSS_ADD_PROTAGONIST(state, action: PayloadAction<Protagonist>) {
            state.protagonists = [...state.protagonists, action.payload]
        },
        PROSS_DELETE_PROTAGONIST(state, action: PayloadAction<Protagonist>) {
            state.protagonists = state.protagonists.filter((Protagonist)=>{
                return Protagonist.id !== action.payload.id
            })
        },
        PROSS_GET_PROTAGONIST(state,action: PayloadAction<Protagonist[]>){
            state.protagonists = action.payload
        }
    
    }
})
export const { PROSS_ADD_PROTAGONIST,PROSS_DELETE_PROTAGONIST,PROSS_GET_PROTAGONIST } = protagonistSlice.actions
export default protagonistSlice.reducer