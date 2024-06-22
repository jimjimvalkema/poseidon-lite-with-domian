import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/7'

const c = unstringifyBigInts(_c)

export function poseidon7(inputs, domain) {
  return poseidon(inputs, c, domain)
}
