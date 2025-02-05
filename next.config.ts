import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
    },
    experimental: {
        serverActions: {
            allowedOrigins: ['*'],
        },
    },
};

export default withNextIntl()(nextConfig);
