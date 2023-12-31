import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/css/Nav.css',
        '/css/AboutMe.css',
        '/css/ContactMe.css',
        '/css/Footer.css',
        '/css/Projects.css',
        '/css/Skill.css',
        '/css/Welcome.css'
      ], // Ajusta esta línea según tu estructura de carpetas
    },
  },
});