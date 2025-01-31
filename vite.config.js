import { defineConfig } from 'vite';
import { exec } from 'child_process';

// Run the custom script to open the desired URL
exec('node open-url.cjs', (err) => {
  if (err) {
      console.error('Failed to execute script:', err);
  }
});

export default defineConfig({
  server: {
    open: false,
    watch: {
      usePolling: true
    }
  }
});