import React from 'react'
import fondo from "../../src/assets/golden_-_48569 (1080p).mp4"

const VideoLayout = () => {
  return (
    <>
     <video className='h-screen absolute bg-cover top-0 left-0' autoPlay muted loop>
        <source src={fondo} type="video/mp4" />
      </video>
      <section
        className='absolute top-0 left-0 w-full h-full bg-black opacity-30'
      ></section>
    </>
  )
}

export default VideoLayout