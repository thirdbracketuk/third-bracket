const redirects = async () => {
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header',
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }

  // SEO-safe migration: Redirect all posts URLs to blog URLs
  const postsToBlogs = [
    {
      source: '/posts',
      destination: '/blog',
      permanent: true, // 301 redirect
    },
    {
      source: '/posts/:slug*',
      destination: '/blog/:slug*',
      permanent: true, // 301 redirect
    },
    {
      source: '/posts/page/:pageNumber*',
      destination: '/blog',
      permanent: true, // 301 redirect
    },
  ]

  // SEO-safe migration: Redirect all portfolio URLs to work URLs
  const portfolioToWork = [
    {
      source: '/portfolio',
      destination: '/work',
      permanent: true, // 301 redirect
    },
    {
      source: '/portfolio/:slug*',
      destination: '/work/:slug*',
      permanent: true, // 301 redirect
    },
  ]

  const redirects = [internetExplorerRedirect, ...postsToBlogs, ...portfolioToWork]

  return redirects
}

export default redirects
