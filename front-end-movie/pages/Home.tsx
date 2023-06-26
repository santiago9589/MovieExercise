import React from 'react'
import { Movie } from '../types/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { PROSS_INITIAL_MOVIE, START_GET_MOVIE } from '../src/store/sliceMovie';
import { Link, useLocation } from "wouter"
import {stateProps} from "./../types/appState"



const Home = () => {
  const { movies } = useSelector((state: stateProps) => state.appReducer)
  const state = useSelector((state: stateProps) => state.appReducer)
  const dispatch = useDispatch()
  const [location, navigate] = useLocation()

  useEffect(() => {
    dispatch(START_GET_MOVIE())
  }, [])

  const modifyInitialMovie = (movie: Movie) => {
    dispatch(PROSS_INITIAL_MOVIE(movie))
  }

  return (
    <section className='grid grid-cols-5 grid-rows-4 w-full h-screen'>
      <section className={`col-span-5 row-span-2 relative`}>
        <div className={` flex flex-col items-center justify-around hover:opacity-30 bg-black absolute w-full h-full opacity-0`}>
          <h2 className='text-6xl uppercase'>{state.movies.initialMovie.nameMovie}</h2>
          <p onClick={() => {
            navigate(`/details/${state.movies.initialMovie.id}`)
          }} className='text-3xl lowercase'>VER DETALLE</p>
        </div>
        <img className='h-full w-full' src={state.movies.initialMovie.imageMovie} alt="movie.img" />
      </section>
      <section className='col-span-5 row-start-3 row-span-2 flex justify-around gap-4 flex-wrap overflow-y-auto p-4'>
        {
          movies.movies.map((movie) => {
            return (
              <article onClick={() => { modifyInitialMovie(movie) }} key={movie.id} className='grid grid-cols-2 grid-rows-3 border-2 border-white w-1/5 h-[450px]'>
                <img className='col-span-2 row-span-2 w-full' src={movie.imageMovie} alt="movie.img" />
                <section className='col-span-2 row-span-1 mt-2 px-2 flex flex-col justify-around'>
                  <header className='flex justify-between items-center'>
                    <h2 className='mt-2 text-2xl'>{movie.nameMovie}</h2>
                    <p>{"★".repeat(movie.Raiting).padEnd(5, "☆")}</p>
                  </header>
                  <footer className='flex justify-between items-center'>
                    <h3 className='mt-2 text-2xl'>{movie.datePublished?.toLocaleString("es-AR", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric"
                    })}</h3>
                    <h3 className='mt-2 text-2xl'>{movie.genderMovie}</h3>
                  </footer>
                </section>
              </article>
            )
          })
        }
      </section>
    </section>
  )
}

export default Home

