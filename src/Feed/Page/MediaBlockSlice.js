import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCatPhotos } from '../api/photos'

export const fetchBlock = createAsyncThunk(
  'mediaBlock/fetchBlock',
  async ({ photosCount }) => {
    // TODO: Add facts
    const photos = await getCatPhotos(photosCount)
    return { photos }
  }
)

export const mediaBlockSlice = createSlice({
  name: 'mediaBlock',
  initialState: {
    blocks: []
  },

  extraReducers (builder) {
    // TODO: Add error handle
    builder.addCase(fetchBlock.fulfilled, (state, { payload }) => {
      state.blocks.push({ photos: payload.photos })
    })
  }
})

export const { increment } = mediaBlockSlice.actions
export default mediaBlockSlice.reducer
