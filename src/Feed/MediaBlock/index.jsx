import React from 'react'
import { chunk } from 'lodash'

const PHOTOS_PER_COLUMN = 2

/**
 * Block with cat photos and facts.
 */
export default ({ block }) => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 p-4'>
      {chunk(block.photos, PHOTOS_PER_COLUMN)
        .map((photos, index) => (
          <div
            className='space-y-8'
            key={index}
          >
            {photos.map(photo => (
              <img
                className='rounded-xl'
                src={photo}
                key={photo}
                crossOrigin='anonymous'
              />
            ))}
          </div>
        ))}
    </div>
  )
}
