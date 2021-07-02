import React from 'react'

export default () => {
  return (
    <div className='flex content-center my-4 p-4 border-2 border-yellow-600 shadow-md rounded-full'>
      <h2 className='flex-1 text-xl tracking-wider text-yellow-600 font-bold'>
        Look, Cats!
      </h2>

      <div className='flex items-center'>
        <a
          className='text-yellow-600 hover:underline'
          href='https://github.com/Seryiza/look-cats'
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
