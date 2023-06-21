import { useState, useEffect } from 'react'
import './App.css'
import { Movie } from "./../types/Movie"
import { api } from "./../api/api"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PROSS_ADD_MOVIE, START_GET_MOVIE } from "./store/sliceMovie"
import { Protagonist } from '../types/Protagonist';

interface appState {
  appReducer: {
    movies: Movie[]
    protagonist: Protagonist[]
  }
}

function App() {

  const [state, setState] = useState<Movie[]>()
  const data = useSelector((state: appState) => state.appReducer.movies)
  const dispatch = useDispatch()

  useEffect(() => {

  }, [data])

  console.log(data)
  return (
    <>
      <button onClick={() => {
        console.log("dfgsgsd")
        dispatch(START_GET_MOVIE())
      }}>hfghgf</button>

      <button onClick={() => {
        console.log("dfgsgsd")
        dispatch(PROSS_ADD_MOVIE({
          id: 6,
                    nameMovie: "fdfd",
                    genderMovie: "Dfdfd",
                    datePublished:null,
                    Raiting: 5,
                    imageMovie: "fdfd",
                    resumenMovie: "fdf",
                    listProtagonist:[]
        }))
      }}>CREERERE</button>

    </>
  )
}

export default App
