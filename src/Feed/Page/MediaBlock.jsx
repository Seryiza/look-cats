import React from 'react'

/**
 * Block with cat photos and facts.
 */
export default ({ block }) => {
  return (
    <div>
      {block.photos.map(photo => (
        <img src={photo} key={photo} crossOrigin='anonymous' />
      ))}
    </div>
  )
}
