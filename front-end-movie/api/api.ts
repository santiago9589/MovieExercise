import { Movie } from "../types/Movie";
import axios from "axios";
import { Protagonist } from "../types/Protagonist";
import perrito from "./../src/assets/descarga.jpg"

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
                    nameMovie: "juancho1",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 2,
                    nameMovie: "juancho2",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 3,
                    nameMovie: "juancho3",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 4,
                    nameMovie: "juancho4",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 5,
                    nameMovie: "juancho5",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 6,
                    nameMovie: "juancho6",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 7,
                    nameMovie: "juancho7",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 8,
                    nameMovie: "juancho8",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 9,
                    nameMovie: "juancho9",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                }, {
                    id: 10,
                    nameMovie: "juancho10",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 11,
                    nameMovie: "juancho11",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 12,
                    nameMovie: "juancho12",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
                    listProtagonist: []
                },
                {
                    id: 13,
                    nameMovie: "juancho13",
                    genderMovie: "juancho",
                    datePublished: new Date(),
                    Raiting: 2,
                    imageMovie: perrito,
                    resumenMovie: "Su título deriva del latín dolorem ipsum, que significa “el dolor en sí”. En su versión más común Lorem Ipsum usa fragmentos de De finibus bonorum et malorum, un tratado de filosofía de Cicerón escrito en el año 45 antes de Cristo, aunque con palabras y frases modificadas, eliminadas o añadidas",
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
                imageMovie: perrito,
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
                imageMovie: perrito,
                resumenMovie: "juancho",
                listProtagonist: []
            };

        } catch (error) {

            throw new Error("error");
        }
    },

    //MOCK

}







