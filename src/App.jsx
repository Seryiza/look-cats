import React from 'react'
import Feed from './Feed/Feed'

export default () => {
  return (
    <div>
      <h1 className='text-6xl font-extrabold text-gray-900'>
        <span>Hello, </span>
        <span className='text-indigo-600'>World!</span>
      </h1>

      <Feed />
    </div>
  )
}
