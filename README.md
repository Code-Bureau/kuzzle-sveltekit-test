# Test repo: [Kuzzle](https://kuzzle.io) with [SvelteKit](https://kit.svelte.dev) / [Vite](https://vitejs.dev/)

To get running:

1. Clone repo
2. Run `npm install`
3. Run `npm run dev -- --open` (works)
3. Run `npm run build` (fails)

The error should read:

```zsh
Named export 'WebSocket' not found. The requested module 'kuzzle-sdk' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'kuzzle-sdk';
const { Kuzzle, WebSocket } = pkg;
```

And using their suggestion:

1. Comment out line 2 in `src/routes/index.svelte`
2. Uncomment line 3 and 4
3. Run `npm run dev -- --open` (fails)

Vite should be able to work with packages that [ships with both CommonJS and ESM builds](https://vitejs.dev/guide/ssr.html#ssr-externals) but mistakes `kuzzle-sdk` to be only CommonJS.
