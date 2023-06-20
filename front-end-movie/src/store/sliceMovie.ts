import { createSlice } from "@reduxjs/toolkit"
import { Movie } from "../../types/Movie"
import type { PayloadAction } from '@reduxjs/toolkit'


interface movieState {
    movies: Movie[]
}

const initialAppState: movieState = {
    movies: [],
}

const movieSlice = createSlice({
    name: "movieState",
    initialState: initialAppState,
    reducers: {
      
        PROSS_ADD_MOVIE(state, action: PayloadAction<Movie>) {
            state.movies = [...state.movies, action.payload]
        },
        PROSS_DELETE_MOVIE(state, action: PayloadAction<Movie>) {
            state.movies = state.movies.filter((movie)=>{
                return movie.id !== action.payload.id
            })
        },
        PROSS_GET_MOVIE(state,action: PayloadAction<Movie[]>){
            state.movies = action.payload
        }
       
    }
})
export const { PROSS_ADD_MOVIE,PROSS_DELETE_MOVIE,PROSS_GET_MOVIE } = movieSlice.actions
export default movieSlice.reducer