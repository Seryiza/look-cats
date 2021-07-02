import React from 'react'

/**
 * Block with cat photos and facts.
 */
export default ({ block }) => {
  return (
    <div className='grid grid-cols-2 gap-4 p-2'>
      {block.photos.map(photo => (
        <img
        className='rounded-xl'
        src={photo}
        key={photo}
        crossOrigin='anonymous' />
      ))}
    </div>
  )
}
