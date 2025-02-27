import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			app: '/src/app',
			pages: '/src/pages',
			shared: '/src/shared',
			store: '/src/store',
			widgets: '/src/widgets',
		},
	},
})
