import { useState, useEffect } from 'react'
import './App.css'
import { Movie } from "./../types/Movie"
import { api } from "./../api/api"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PROSS_ADD_MOVIE, START_GET_MOVIE, PROSS_UPDATE_MOVIE } from "./store/sliceMovie"
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
        dispatch(PROSS_ADD_MOVIE({
          id: 5,
          nameMovie: "fdfd",
          genderMovie: "Dfdfd",
          datePublished: null,
          Raiting: 5,
          imageMovie: "fdfd",
          resumenMovie: "fdf",
          listProtagonist: []
        }))
      }}>CREAR</button>
      <button onClick={() => {
        dispatch(PROSS_UPDATE_MOVIE({
          id: 1,
          Movie: {
            id: null,
            nameMovie: "MODIFICAR",
            genderMovie: "MODIFICAR",
            datePublished: null,
            Raiting: 5,
            imageMovie: "fdfd",
            resumenMovie: "fdf",
            listProtagonist: []
          }

        }))
      }}>MODIFICAR</button>

    </>
  )
}

export default App
