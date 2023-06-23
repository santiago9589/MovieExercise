import React from 'react'
import { Link } from "wouter";
import { Movie } from '../types/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { Protagonist } from '../types/Protagonist';
import { useEffect, useState } from "react";
import { START_GET_MOVIE } from '../src/store/sliceMovie';


interface stateProps {
  appReducer: {
    movies: {
      movies: Movie[],
      initialMovie:Movie
    },
    protagonist: {
      protagonist: Protagonist[]
    },
  }
}

const Home = () => {


  const { movies } = useSelector((state: stateProps) => state.appReducer)
  const state = useSelector((state: stateProps) => state.appReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(START_GET_MOVIE())
  }, [])

  console.log(state.movies.initialMovie)


  return (
    <section className='grid grid-cols-5 grid-rows-4 w-full h-screen border-2 border-white '>
      <section className='border-2 border-white col-span-5 row-span-2'>
        <div className='bg-black absolute w-40 h-40'></div>
         <img className='h-full w-full' src={state.movies.initialMovie.imageMovie} alt="movie.img" />
      </section>
      <section className='border-2 border-white col-span-5 row-start-3 row-span-2 flex justify-around gap-4 flex-wrap overflow-y-auto p-4'>
        {
          movies.movies.map((movie) => {
            return (
              <article onClick={() => {  }} key={movie.id} className='grid grid-cols-2 grid-rows-3 border-2 border-white w-1/5 h-[450px]'>
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


{/* <p>{"★".repeat(product.rating).padEnd(5,"☆")}</p>
            <p>{product.price.toLocaleString("es-AR",{
                style:"currency",
                currency:"ARS"
            })}</p> */}