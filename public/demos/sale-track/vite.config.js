import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    base: '/demos/sale-track/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            // Stub out the old Babel macro - it just returns empty strings for styled-components
            'tailwind.macro': path.resolve(__dirname, 'src/tailwind-macro-stub.js'),
        },
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },
});
