'use strict'

const t = require('tap')
const asLoops = require('./index')

const sut = [1, 2, 3, 4, 5]

const isArrayOrdered = (arr) => {
  let sorted = true
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      sorted = false
      break
    }
  }
  return sorted
}

const wait = () => new Promise((resolve, _) => {
  setTimeout(() => {
    resolve()
  }, 100)
})

t.test('should perform array loop async', async (t) => {
  t.plan(3)

  const results = []

  await asLoops.forEachAsync(sut, async (s) => {
    await wait()
    results.push(s * 2)
  })

  t.ok(isArrayOrdered(results))
  t.ok(results[0] === 2)
  t.ok(results[4] === 10)
  t.end()
})

/*
t.test('should perform array map async', async (t) => {
    t.plan(3)

    const results = await asLoops.mapAsync(sut, async (s)=>{
        await wait()
        return s*2
    })

    t.ok(isArrayOrdered(results))
    t.ok(results[0] == 2)
    t.ok(results[4] == 10)
    t.end()
})
*/
