/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        setupFiles: ['./src/tests/Server.test.ts'],
        coverage: {
            provider: 'istanbul'
        },
        include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
        exclude: ['**/dist/**', '**/node_modules/**'],
    },
})

