import React from 'react'

import Feed from '../Feed/Feed'
import TopBar from '../TopBar'
import Footer from '../Footer'

export default () => {
  return (
    <div className='container mx-auto p-8'>
      <TopBar />
      <Feed />
      <Footer />
    </div>
  )
}
