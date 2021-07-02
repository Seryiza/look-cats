import React from 'react'

import Feed from '../Feed/Feed'
import TopBar from '../TopBar'

export default () => {
  return (
    <div className='container mx-auto'>
      <TopBar />
      <Feed />
    </div>
  )
}
