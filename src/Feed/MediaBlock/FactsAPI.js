import ky from 'ky'

export const getCatFact = async () => {
  const { fact } = await ky('https://cat-facts-proxy.seryiza.xyz/random-fact').json()
  return fact
}
