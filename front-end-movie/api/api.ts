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
    addProtagonist: async (newProtagonist : Protagonist): Promise<Protagonist> => {
        try {
            const protagonistAdded = await axios.post("http://localhost:8080/api/protagonist/addOne",{
                newProtagonist
            });

            return protagonistAdded.data;
        } catch (error) {
            throw new Error("error");
        }
    },
    getOneProtagonist: async (id:string): Promise<Protagonist> => {
        try {
            const getProtagonist = await axios.get(`http://localhost:8080/api/protagonist/getOneProtagonist/${id}`);

            return getProtagonist.data;
        } catch (error) {
            throw new Error("error");
        }
    }, 
    deleteProtagonist:async (id:string): Promise<string> => {

        try {

            const response = await axios.delete(`http://localhost:8080/api/protagonist/deleteOne/${id}`);

        return response.data
            
        } catch (error) {
            
            throw new Error("error");
        }
    },
    updateProtagonist:async (id:string,protagonist:Protagonist): Promise<Protagonist> => {

        try {

        const response = await axios.put(`http://localhost:8080/api/protagonist/updateOne/${id}`,{
            protagonist
        });

        return response.data
            
        } catch (error) {
            
            throw new Error("error");
        }
    },

    //Movies

    getMovies: async (): Promise<Movie[]> => {
        try {
            const movieList = await axios.get("http://localhost:8080/api/movie/getList");

            return movieList.data;
        } catch (error) {
            throw new Error("error");
        }
    },
    getOneMovie: async (id:string): Promise<Movie> => {

        try {

            const oneMovie = await axios.get(`http://localhost:8080/api/movie/getOneMovie/${id}`);

        return oneMovie.data
            
        } catch (error) {
            
            throw new Error("error");
        }
    },
    addOneMovie: async (movie: Movie): Promise<Movie> => {
        
        console.log(movie)

        const movieJson = JSON.stringify(movie)
     

        try {

            const movieAdded = await axios.post("http://localhost:8080/api/movie/addOne",movie, 
            {
                headers: { 'Content-Type': 'application/json' }
            }, 




            );

            return movieAdded.data;

        } catch (error) {

            throw new Error("error");
        }
    },
    deleteOneMovie:async (id:string): Promise<string> => {

        try {

            const response = await axios.delete(`http://localhost:8080/api/movie/deleteOne/${id}`);

        return response.data
            
        } catch (error) {
            
            throw new Error("error");
        }
    },
    updateOneMovie:async (id:string,movie:Movie): Promise<Movie> => {

        try {

        const response = await axios.put(`http://localhost:8080/api/movie/updateOne/${id}`,{
            movie
        });

        return response.data
            
        } catch (error) {
            
            throw new Error("error");
        }
    },

}







