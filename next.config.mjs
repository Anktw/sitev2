/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@lib': path.resolve(__dirname, 'lib')
    };
    return config;
  },
};
export default nextConfig;