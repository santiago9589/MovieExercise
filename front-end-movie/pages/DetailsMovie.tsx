import React from 'react'
import { useSelector } from 'react-redux'
import { stateProps } from '../types/appState'
import { useLocation } from "wouter"



const DetailsMovie = () => {

  const state = useSelector((state: stateProps) => state.appReducer)
  const [location, navigate] = useLocation()

  console.log(state.movies.initialMovie)
  return (
    <section className='grid grid-cols-5 grid-rows-4 w-full h-screen'>
      <section className='border-2 row-start-2 row-span-2 col-span-5 flex justify-between'>
        <section className='flex-1'>
          <img className='h-full w-full' src={state.movies.initialMovie.imageMovie} alt="movie.img" />
        </section>
        <article className='border-2 border-black-400 flex-1 grid grid-cols-4 grid-rows-4 p-2 box-border'>
          <h2 className='place-self-center col-span-3 text-6xl row-span-1'>{state.movies.initialMovie.nameMovie}</h2>
          <p className='place-self-center row-span-1 text-4xl col-span-1'>{state.movies.initialMovie.id}</p>
          <p className='text-xl place-self-stretch col-span-4 row-span-2 text-justify'>{state.movies.initialMovie.resumenMovie}</p>
          <footer className='col-span-4 w-full h-full flex justify-between'>
            <section className='border-2 border-yellow-400 flex-1'>
              <h3>Protagonistas:</h3>
              {
                state.movies.initialMovie.listProtagonist.map((protagonist) => {
                  return (
                    <p key={protagonist.id}>{protagonist.nameProtagonist}</p>
                  )
                })
              }
            </section>
            <section className='border-2 border-pink-400 flex-1 flex flex-col justify-between'>
              <section>
                <h3>Genero:</h3>
                <p>{state.movies.initialMovie.genderMovie}</p>
              </section>
              <section>
                <h3>Fecha de publicacion:</h3>
                <p>{state.movies.initialMovie.datePublished?.toLocaleString("es-AR", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric"
                })}</p>
              </section>
            </section>
          </footer>
        </article>
      </section>
      <footer className='row-start-4 col-start-2 col-span-3 flex items-center justify-center'>
        <button onClick={() => {
            navigate(`/menu`)
          }}className='border-2 border-white w-1/2 h-1/4 rounded-xl text-2xl uppercase'>volver</button>
      </footer>
    </section>
  )
}

export default DetailsMovie