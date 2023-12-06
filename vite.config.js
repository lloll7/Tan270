import {
	defineConfig
} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
	plugins: [
		uni()
	],
	server: {
		port: 3000,
		proxy: {
			'/api': {
				target: 'https://localhost:3000', // 目标服务  
				changeOrigin: true,
			}
		}
	}
})