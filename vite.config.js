import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite-Konfiguration für React + Vercel
export default defineConfig({
  plugins: [react()],
});