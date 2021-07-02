import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MediaBlock from './MediaBlock/MediaBlock'
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
    dispatch(fetchBlock({ photosCount: 3 }))
  }, [])

  return (
    <div>
      {blocks.map((block, i) => <MediaBlock block={block} key={i} />)}

      {isLoading && <h2>Loading...</h2>}
      <button onClick={() => dispatch(fetchBlock({ photosCount: 3 }))}>Load more</button>
    </div>
  )
}
