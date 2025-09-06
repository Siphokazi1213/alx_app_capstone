import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin } from 'postcss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_PATH ||"/alx_app_capstone" ||"alx_app"
})