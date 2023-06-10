import { useState, useEffect } from 'react'
import './App.css'
import { Movie } from "./../types/Movie"
import { api } from "./../api/api"

function App() {

  const [data, setData] = useState<Movie[]>()

  useEffect(() => {
    api.getMovies().then((response) => {
      setData(response)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  console.log(data)

  return (
    <>

    </>
  )
}

export default App
