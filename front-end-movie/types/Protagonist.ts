import { Movie } from "./Movie";

export interface Protagonist {
    id: number,
    nameProtagonist: string,
    lastNameProtagonist: string,
    dateOfBirth: Date,
    movie: Movie
};



