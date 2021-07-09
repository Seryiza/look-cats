import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCatFact } from './FactsAPI'
import { getCatPhotos } from './PhotosAPI'

export const fetchBlock = createAsyncThunk(
  'mediaBlock/fetchBlock',
  async ({ photosCount }) => {
    const photos = await getCatPhotos(photosCount)
    const fact = await getCatFact()
    return { photos, fact }
  }
)

export const mediaBlockSlice = createSlice({
  name: 'mediaBlock',
  initialState: {
    blocks: [],
    loadingState: 'idle'
  },

  extraReducers (builder) {
    // TODO: Add error handle
    builder.addCase(fetchBlock.pending, (state) => {
      state.loadingState = 'pending'
    })
    builder.addCase(fetchBlock.fulfilled, (state, { payload }) => {
      state.blocks.push({ photos: payload.photos, fact: payload.fact })
      state.loadingState = 'idle'
    })
  }
})

export const { increment } = mediaBlockSlice.actions
export default mediaBlockSlice.reducer
