import { Protagonist } from "./Protagonist";

export interface Movie {
    id: number | null,
    nameMovie: string,
    genderMovie: string,
    datePublished: Date | null,
    Raiting: number,
    imageMovie: string,
    resumenMovie: string,
    listProtagonist: Protagonist[]

};