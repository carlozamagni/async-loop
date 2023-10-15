'use strict'

async function forEachAsync (array, cb) {
  for (let i = 0; i < array.length; i++) {
    await cb(array[i], i, array)
  }
}

export { forEachAsync }
