import { Protagonist } from "./Protagonist";

export interface Movie {
    id: number,
    nameMovie: string,
    genderMovie: string,
    datePublished: Date | null,
    Raiting: number,
    imageMovie: string,
    resumenMovie: string,
    listProtagonist: Protagonist[]

};