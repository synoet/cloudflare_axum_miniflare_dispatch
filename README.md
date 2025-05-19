When using Axum with workers-rs, responses return a lazy hyper::Body that gets converted into a ReadableStream. 
In Miniflare, if that stream isn't fully consumed or explicitly cancelled before the fetch handler ends, it triggers a "hanging Promise" warning and causes the response to be replaced with a 500 error.

```
stderr | broken.test.ts > Miniflare > should work
A hanging Promise was canceled. This happens when the worker runtime is waiting for a Promise from JavaScript to resolve, but has detected that the Promise cannot possibly ever resolve because all code and events related to the Promise's I/O context have already finished.

 ❯ broken.test.ts (1 test | 1 failed) 178ms
   × Miniflare > should work 174ms
     → expected 500 to be 200 // Object.is equality
```


### Broken
```sh
npm i
npm vitest
```

### Working
```sh 
npm i
curl http://localhost:8787/hello
```
