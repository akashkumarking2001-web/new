/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }
        ],
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    async rewrites() {
        return [
            // AI Agent Backend Proxies
            {
                source: '/api/auth/:path*',
                destination: 'http://localhost:3333/api/auth/:path*',
            },
            {
                source: '/api/sessions/:path*',
                destination: 'http://localhost:3333/api/sessions/:path*',
            },
            {
                source: '/api/terminals/:path*',
                destination: 'http://localhost:3333/api/terminals/:path*',
            },
            {
                source: '/api/db/:path*',
                destination: 'http://localhost:3333/api/db/:path*',
            },
            {
                source: '/api/files/:path*',
                destination: 'http://localhost:3333/api/files/:path*',
            },
            {
                source: '/ws/:path*',
                destination: 'http://localhost:3333/ws/:path*',
            },
            // Catch-all for other AI agent specific endpoints like /api/hook-stats, /api/ssh-keys
            {
                source: '/api/hook-stats',
                destination: 'http://localhost:3333/api/hook-stats',
            },
            {
                source: '/api/mq-stats',
                destination: 'http://localhost:3333/api/mq-stats',
            },
            {
                source: '/api/reset',
                destination: 'http://localhost:3333/api/reset',
            },
            {
                source: '/api/ssh-keys',
                destination: 'http://localhost:3333/api/ssh-keys',
            },
            {
                source: '/api/tmux-sessions',
                destination: 'http://localhost:3333/api/tmux-sessions',
            },
            {
                source: '/api/teams/:path*',
                destination: 'http://localhost:3333/api/teams/:path*',
            }
        ];
    }
};

export default nextConfig;
