import { createSlice } from "@reduxjs/toolkit"
import { Movie } from "../../types/Movie"
import type { PayloadAction } from '@reduxjs/toolkit'


interface movieState {
    movies: Movie[],
    initialMovie: Movie
}

const initialAppState: movieState = {
    movies: [],
    initialMovie: {
        Raiting: 0,
        datePublished: new Date(),
        genderMovie: "",
        id: 0,
        imageMovie: "",
        listProtagonist: [],
        nameMovie: "",
        resumenMovie: ""
    }
}

const movieSlice = createSlice({
    name: "movieState",
    initialState: initialAppState,
    reducers: {
        START_GET_MOVIE(state) {
            state
        },
        PROSS_GET_MOVIE(state, action: PayloadAction<Movie[]>) {
            state.movies = action.payload
        },
        PROSS_ADD_MOVIE(state, action: PayloadAction<Movie>) {
            state
            action
        },
        PROSS_UPDATE_MOVIE(state, action: PayloadAction<{ id: number, Movie: Movie }>) {
            state
            action
        },
        PROSS_DELETE_MOVIE(state, action: PayloadAction<{ id: number }>) {
            state
            action
        },

        PROSS_INITIAL_MOVIE(state, action: PayloadAction<Movie>) {
            state.initialMovie = action.payload
        },


    }
})
export const { PROSS_INITIAL_MOVIE, PROSS_UPDATE_MOVIE, PROSS_ADD_MOVIE, PROSS_DELETE_MOVIE, PROSS_GET_MOVIE, START_GET_MOVIE } = movieSlice.actions
export default movieSlice.reducer