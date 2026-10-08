import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // './' = relative paths, works on both
  // https://<user>.github.io/<repo>/ and https://<user>.github.io/
  base: './',
  plugins: [react()],
})
