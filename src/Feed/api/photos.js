import ky from 'ky'
import { times } from 'lodash'

/**
 * Get photo of cat :3
 */
export const getCatPhoto = async () => {
  const { url } = await ky('https://cataas.com/cat?json=true').json()
  return `https://cataas.com${url}`
}

/**
 * Get multiple photos of cats.
 */
export const getCatPhotos = async (count) => {
  const photos = times(count, getCatPhoto)
  return Promise.all(photos)
}
