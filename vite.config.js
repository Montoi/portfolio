import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Force restart for framer-motion
export default defineConfig({
  plugins: [react()],
})
