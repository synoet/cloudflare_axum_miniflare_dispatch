Repo reproducing broken miniflare dispatch http requests when using workers-rs with axum.

All miniflare dispatch requests resolve as a 500 error. Seems to be related to how axum handles responses with bodies.

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
