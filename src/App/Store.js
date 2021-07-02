import { configureStore } from '@reduxjs/toolkit'

import MediaBlockReducer from '../Feed/MediaBlock/MediaBlockSlice'

export default configureStore({
  reducer: {
    mediaBlock: MediaBlockReducer
  }
})
