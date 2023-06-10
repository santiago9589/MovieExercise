import { Movie } from "../types/Movie";
import axios from "axios";

export const api = {
    addProtagonist: async (): Promise<String> => {
        return "juan"
    },
    getProtagonist: async (): Promise<String> => {
        return "juan"
    },
    getOneProtagonist: async (): Promise<String> => {
        return "juan"
    },
    getMovies: async (): Promise<Movie[]> => {
        try {
            const movieList = await axios.get("http://localhost:8080/api/movie/getList");

            return movieList.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    getOneMovie: async (): Promise<String> => {
        return "juan"
    },
    addOneMovie: async (movie: Movie): Promise<Movie> => {
        try {

            const movieAdded = await axios.post("http://localhost:8080/api/movie/addOne", {
                movie
            });

            return movieAdded.data;

        } catch (error) {

            throw new Error(error);
        }
    },
}