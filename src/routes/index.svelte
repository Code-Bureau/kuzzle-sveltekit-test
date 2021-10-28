<script lang="ts">
  // import { Kuzzle, WebSocket } from 'kuzzle-sdk';
  import pkg from 'kuzzle-sdk';
  const { Kuzzle, WebSocket } = pkg;
  
  const kuzzle = new Kuzzle(
    new WebSocket('localhost')
  );
  
  kuzzle.on('networkError', error => {
    console.error('Network Error: ', error);
  });
  
  const run = async () => {
    try {
      // Connects to the Kuzzle server
      await kuzzle.connect();
      // Gets api
      const res = await kuzzle.query({
        controller: 'server',
        action: 'openapi',
        format: 'json'
      });
      
      console.log(res);
    } catch (error) {
      console.error(error.message);
    } finally {
      kuzzle.disconnect();
    }
  };
  
  run();
</script>

<h1>Kuzzle SvelteKit (Vite) test</h1>

<p>See `README.md` for details.</p>
