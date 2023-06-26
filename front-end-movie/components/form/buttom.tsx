import React from 'react'

interface props {
  name: string
}

const ButtomForm = ({ name }: props) => {
  return (
    <button
      type="submit"
      className='bg-yellow-600 rounded-lg mt-4
    p-2
    text-2xl
    uppercase
    w-full
    '>
      {name}
    </button>
  )
}

export default ButtomForm