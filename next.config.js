import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Modern Next.js no longer uses legacyBrowsers option
  },
  // SWC minification is enabled by default in recent Next.js versions
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve Node.js built-in modules on the client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        worker_threads: false,
        fs: false,
        path: false,
        os: false,
        assert: false,
        module: false,
        'node:assert': false,
        'node:fs': false,
        'node:module': false,
        'node:os': false,
        'node:path': false,
      }
    }
    return config
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })

// import { withPayload } from '@payloadcms/next/withPayload'
// import redirects from './redirects.js'

// const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
//   ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
//   : process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: true,
//     turbo: true,
//   },
//   images: {
//     domains: [
//       'localhost',
//       'thirdbracket.com',
//       'thirdbracket.vercel.app',
//       'thirdbracket-blog.vercel.app',
//       'thirdbracket-blog.vercel.app',
//       'thirdbracket-blog.vercel.app',
//     ],
//   },
//   reactStrictMode: true,
//   redirects,
//   // Optimize for modern browsers by disabling unnecessary transpilation
//   swcMinify: true,
//   reactStrictMode: true,
// }

// export default withPayload(nextConfig, { devBundleServerPackages: false })

// import { withPayload } from '@payloadcms/next/withPayload'
// import redirects from './redirects.js'

// const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
//   ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
//   : process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: {}, // ✅ Must be an object (not boolean) in Next.js 15
//     turbo: true,
//   },
//   images: {
//     domains: [
//       'localhost',
//       'thirdbracket.com',
//       'thirdbracket.vercel.app',
//       'thirdbracket-blog.vercel.app',
//     ],
//   },
//   // reactStrictMode: true,
//   redirects,
// }

// export default withPayload(nextConfig, {
//   devBundleServerPackages: false,
// })
