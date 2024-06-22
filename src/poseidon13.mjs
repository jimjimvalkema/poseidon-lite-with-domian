import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/13'

const c = unstringifyBigInts(_c)

export function poseidon13(inputs, domain) {
  return poseidon(inputs, c, domain)
}
