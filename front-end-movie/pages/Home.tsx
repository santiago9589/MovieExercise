import React from 'react'
import { Link } from "wouter";

const Home = () => {

  return (
    <>
      <Link href="/protagonist">
        <a className="link">protagonist</a>
      </Link>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default Home