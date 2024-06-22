import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/10'

const c = unstringifyBigInts(_c)

export function poseidon10(inputs, domain) {
  return poseidon(inputs, c, domain)
}
