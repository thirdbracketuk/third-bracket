import Link from 'next/link'
import React from 'react'

import { Bracket, Button } from '@thirdbracket/bracketui'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found, Lets Get You Back On Track',
  description: 'Sorry, that was embarrasing. The page you are looking for is not available.',
  openGraph: {
    title: 'Page Not Found, Lets Get You Back On Track',
    description: 'Sorry, that was embarrasing. The page you are looking for is not available.',
  },
}

export default function NotFound() {
  return (
    <Bracket>
      <div className="pb-8 sm:pb-12 md:pb-16 pt-20  lg:pt-24  px-6 text-center min-h-screen">
        <div className="prose max-w-none mx-auto ">
          <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 dark:from-primary-200 dark:via-primary-100 dark:to-primary-200 text-transparent bg-clip-text  text-center mb-2">
            404
          </h1>
          <p className="mb-4">This page could not be found.</p>

          <Button
            size="md"
            as={Link}
            href="/"
            theme={{
              background: 'bg-gradient-text dark:bg-gradient-text-dark ',
              hoverBackground: '[@media(hover:hover)]:hover:opacity-95',
              focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
              text: 'text-primary-50 dark:text-primary-950 ',
            }}
            className="no-underline"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </Bracket>
  )
}
