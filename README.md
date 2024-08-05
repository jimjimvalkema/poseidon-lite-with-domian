# poseidon-lite [![CircleCI](https://dl.circleci.com/status-badge/img/gh/vimwitch/poseidon-lite/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/vimwitch/poseidon-lite/tree/main)

A 0 dependence poseidon implementation over alt_bn128 (aka BN254).

## Warning

This implementation uses the native javascript `BigInt` which is vulnerable to timing attacks.

This implementation has **not** been audited.

## Use

`npm i poseidon-lite-with-domain`

```js
import { poseidon2 } from 'poseidon-lite-with-domain'
// pass an array to the function
// array length must be equal to the function name
// returns a BigInt
const domain = 512
const hash = poseidon2(['0x01', '0x02'],domain)
```

### Individual import

```js
import { poseidon2 } from 'poseidon-lite-with-domain/poseidon2'
const domain = 512
const hash = poseidon2(['0x01', '0x02'],domain)
```

## Build

```sh
npm i
npm run build
npm test
```

## License

Versions `>=0.2.0` are MIT

Versions `<0.2.0` are GPL-3.0
