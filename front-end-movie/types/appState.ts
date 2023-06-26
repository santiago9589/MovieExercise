import {Movie} from "./Movie"
import { Protagonist } from "./Protagonist"

export interface stateProps {
    appReducer: {
      movies: {
        movies: Movie[],
        initialMovie: Movie
      },
      protagonist: {
        protagonist: Protagonist[]
      },
    }
  }