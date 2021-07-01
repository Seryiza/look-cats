import { configureStore } from '@reduxjs/toolkit'

import MediaBlockReducer from '../Feed/Page/MediaBlockSlice'

export default configureStore({
  reducer: {
    mediaBlock: MediaBlockReducer
  }
})
