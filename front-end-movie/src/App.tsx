import { useState, useEffect } from 'react'
import './App.css'
import { Movie } from "./../types/Movie"
import { api } from "./../api/api"
import { useSelector } from 'react-redux';

function App() {

  // const [data, setData] = useState<Movie[]>()

  // useEffect(() => {
  //   api.getMovies().then((response) => {
  //     setData(response)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }, [])

  const data = useSelector((state)=>state);

  console.log(data)

  return (
    <>

    </>
  )
}

export default App
