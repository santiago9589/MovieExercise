import { useState, useEffect } from 'react'
import './App.css'
import { Movie } from "./../types/Movie"
import { api } from "./../api/api"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { START_GET_MOVIE } from "./store/sliceMovie"
import { Protagonist } from '../types/Protagonist';

interface appState {
  appReducer: {
    movies: Movie[]
    protagonist: Protagonist[]
  }
}

function App() {

  const [state, setState] = useState<Movie[]>()
  const data = useSelector((state:appState) => state.appReducer.movies)
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
    </>
  )
}

export default App
