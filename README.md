# array-async-foreach

Iterate asyncronously on collections!

**Note:**: *as of 2023 this module has become obsolete, but it's still functional and someone may found it useful (or just like it) so i'm going to maintain it, feel free to use it.*

## how to use it

install
```npm i array-async-foreach```

usage sample (refer to unit test for more cases)
```
const asLoops = require('array-async-foreach')

...

await asLoops.forEachAsync([1,2,3,4,5], async (i) => {
    ...
    await asynchronousOperationOnElement(i)
    ...
  })

...

```


[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
