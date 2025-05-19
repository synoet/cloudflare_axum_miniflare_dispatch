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
npx wrangler dev
curl http://localhost:8787/hello
```
