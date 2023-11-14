/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'as2.ftcdn.net',
                port: ''
            }
        ]
    }
}

module.exports = nextConfig
