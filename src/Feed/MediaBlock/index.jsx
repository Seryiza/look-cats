import React from 'react'
import { chunk } from 'lodash'

const PHOTOS_PER_COLUMN = 2

/**
 * Block with cat photos and facts.
 */
export default ({ block }) => {
  return (
    <div className='min-h-screen'>
      {block.fact && (
        <div
          className='border-l-2 border-yellow-600 p-2'
          data-cy='cat-fact'
        >
          {block.fact}
        </div>
      )}

      <div className='flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 p-2'>
        {chunk(block.photos, PHOTOS_PER_COLUMN)
          .map((photos, index) => (
            <div
              className='space-y-4'
              key={index}
            >
              {photos.map(photo => (
                <img
                  className='rounded-xl'
                  src={photo}
                  key={photo}
                  crossOrigin='anonymous'
                  data-cy='cat-photo'
                />
              ))}
            </div>
          ))}
      </div>
    </div>
  )
}
