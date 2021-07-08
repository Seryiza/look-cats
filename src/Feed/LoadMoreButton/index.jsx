import React from 'react'

export default ({ onClick, children }) => {
  return (
    <button
      className='p-4 px-16 text-lg text-yellow-600 border-2 border-yellow-600 transition-colors hover:text-white hover:bg-yellow-600'
      onClick={(event) => onClick(event)}
    >
      Load More
    </button>
  )
}
