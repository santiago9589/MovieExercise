import { Movie } from "../types/Movie";
import axios from "axios";
import { Protagonist } from "../types/Protagonist";

export const api = {

    //Protagonist

    getProtagonists: async (): Promise<Protagonist[]> => {
        try {
            const protagonistList = await axios.get("http://localhost:8080/api/protagonist/getProtagonist");

            return protagonistList.data;
        } catch (error) {
            throw new Error("error");
        }
    },
    addProtagonist: async (newProtagonist: Protagonist): Promise<Protagonist> => {
        try {
            const protagonistAdded = await axios.post("http://localhost:8080/api/protagonist/addOne", {
                newProtagonist
            });

            return protagonistAdded.data;
        } catch (error) {
            throw new Error("error");
        }
    },
    getOneProtagonist: async (id: number): Promise<Protagonist> => {
        try {
            const getProtagonist = await axios.get(`http://localhost:8080/api/protagonist/getOneProtagonist/${id}`);

            return getProtagonist.data;
        } catch (error) {
            throw new Error("error");
        }
    },
    deleteProtagonist: async (id: number): Promise<string> => {

        try {

            const response = await axios.delete(`http://localhost:8080/api/protagonist/deleteOne/${id}`);

            return response.data

        } catch (error) {

            throw new Error("error");
        }
    },
    updateProtagonist: async (id: number, protagonist: Protagonist): Promise<Protagonist> => {

        try {

            const response = await axios.put(`http://localhost:8080/api/protagonist/updateOne/${id}`, {
                protagonist
            });

            return response.data

        } catch (error) {

            throw new Error("error");
        }
    },

    //MOVIE


    getOneMovie: async (id: number): Promise<Movie> => {

        try {

            const oneMovie = await axios.get(`http://localhost:8080/api/movie/getOneMovie/${id}`);

            return oneMovie.data

        } catch (error) {

            throw new Error("error");
        }
    },
    getMovies: async (): Promise<Movie[]> => {
        try {
            const movieList = await axios.get("http://localhost:8080/api/movie/getList");

            return movieList.data;
        } catch (error) {
            throw new Error("error");
        }
    },
    addOneMovie: async (movie: Movie): Promise<Movie> => {


        try {

            const movieAdded = await axios.post("http://localhost:8080/api/movie/addOne", movie,
                {
                    headers: { 'Content-Type': 'application/json' }
                },

            );

            return movieAdded.data;

        } catch (error) {

            throw new Error("error");
        }
    },
    deleteOneMovie: async (id: number): Promise<string> => {

        try {

            const response = await axios.delete(`http://localhost:8080/api/movie/deleteOne/${id}`);

            return response.data

        } catch (error) {

            throw new Error("error");
        }
    },
    updateOneMovie: async (id: number, movie: Movie): Promise<Movie> => {

        try {

            const response = await axios.put(`http://localhost:8080/api/movie/updateOne/${id}`,
                movie
                ,
                {
                    headers: { 'Content-Type': 'application/json' }
                },);

            return response.data

        } catch (error) {

            throw new Error("error");
        }
    },
     
    //MOVIE


    //MOCK

    getMoviesMock: async (): Promise<Movie[]> => {
        try {
            const movieList = [
                {
                    id: 1,
                    nameMovie: "juancho",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: "juancho",
                    resumenMovie: "juancho",
                    listProtagonist: []
                },
                {
                    id: 2,
                    nameMovie: "juancho",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: "juancho",
                    resumenMovie: "juancho",
                    listProtagonist: []
                },
                {
                    id: 3,
                    nameMovie: "juancho",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: "juancho",
                    resumenMovie: "juancho",
                    listProtagonist: []
                }
            ];

            return movieList;
        } catch (error) {
            throw new Error("error");
        }
    },
    addOneMovieMock: async (movie: Movie): Promise<Movie> => {
        try {
            return {
                id: 60,
                nameMovie: "juancho",
                genderMovie: "juancho",
                datePublished: new Date(),
                Raiting: 2,
                imageMovie: "juancho",
                resumenMovie: "juancho",
                listProtagonist: []
            };

        } catch (error) {

            throw new Error("error");
        }
    },
    deleteOneMovieMock: async (id: number): Promise<string> => {

        try {

            return "borrado"

        } catch (error) {

            throw new Error("error");
        }
    },
    updateOneMovieMock: async (id: number, movie: Movie): Promise<Movie> => {

        try {

            return {
                id: 60,
                nameMovie: "juancho",
                genderMovie: "juancho",
                datePublished: new Date(),
                Raiting: 2,
                imageMovie: "juancho",
                resumenMovie: "juancho",
                listProtagonist: []
            };

        } catch (error) {

            throw new Error("error");
        }
    },

    //MOCK

}







