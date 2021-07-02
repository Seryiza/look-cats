import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MediaBlock from './MediaBlock'
import LoadMoreButton from './LoadMoreButton'
import { fetchBlock } from './MediaBlock/MediaBlockSlice'

/**
 * Feed of blocks with photos and facts.
 */
export default () => {
  // TODO: Export it
  const isLoading = useSelector(state => state.mediaBlock.loadingState === 'pending')
  const blocks = useSelector(state => state.mediaBlock.blocks)
  const dispatch = useDispatch()

  // Load first block with photos and some fact.
  useEffect(() => {
    dispatch(fetchBlock({ photosCount: 4 }))
  }, [])

  return (
    <div>
      {blocks.map((block, i) => <MediaBlock block={block} key={i} />)}

      {isLoading && <h2>Loading...</h2>}

      <div className='p-2 flex justify-center'>
        <LoadMoreButton onClick={() => dispatch(fetchBlock({ photosCount: 4 }))} />
      </div>
    </div>
  )
}
