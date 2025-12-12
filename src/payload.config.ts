import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Blog } from './collections/Blog'
import { Categories } from './collections/Categories'
import { EmailSender } from './collections/EmailSender'
// EmailTemplates collection removed - using file-based templates instead
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Work } from './collections/Work'
import { Technologies } from './collections/Technologies'
import { Footer } from './Footer/config'
import { Header } from './Header/config'

import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
// import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
// import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
// import { searchPlugin } from '@payloadcms/plugin-search'
// import { redirectsPlugin } from '@payloadcms/plugin-redirects'
// import { seoPlugin } from '@payloadcms/plugin-seo'
import { plugins } from './plugins'
import { resendAdapter } from '@payloadcms/email-resend'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  email: resendAdapter({
    defaultFromAddress: 'no-reply@thirdbracket.co.uk',
    defaultFromName: 'Third Bracket',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- Admin Panel', // Adds a suffix to the default title
      title: 'Third Bracket', // Overrides the entire title
      description: 'This is the administration panel for my application.',

      icons: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          url: '/favicon.ico', // Path to your primary favicon
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          url: '/apple-touch-icon.png', // Path to your Apple touch icon
        },
        // Add more icons as needed for different sizes or formats
      ],
    },
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      // beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      // beforeDashboard: ['@/components/BeforeDashboard'],
      graphics: {
        Icon: '/graphics/Icon/index.tsx#Icon',
        Logo: '/graphics/Logo/index.tsx#Logo',
      },
    },

    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
    // Force schema sync in production to ensure all tables are created
    push: process.env.NODE_ENV === 'production',
  }),
  collections: [Pages, Posts, Blog, Work, Media, Categories, Technologies, Users, EmailSender],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins: [
    ...plugins,

    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
// function resendAdapter(arg0: { defaultFromAddress: string; defaultFromName: string; apiKey: string }) {
//   throw new Error('Function not implemented.')
// }
