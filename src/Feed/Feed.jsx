import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MediaBlock from './Page/MediaBlock'
import { fetchBlock } from './Page/MediaBlockSlice'

/**
 * Feed of blocks with photos and facts.
 */
export default () => {
  const blocks = useSelector(state => state.mediaBlock.blocks)
  const dispatch = useDispatch()

  // Load first block with photos and some fact.
  useEffect(() => {
    dispatch(fetchBlock({ photosCount: 3 }))
  }, [])

  return (
    <div>
      {blocks.map((block, i) => <MediaBlock block={block} key={i} />)}
    </div>
  )
}
