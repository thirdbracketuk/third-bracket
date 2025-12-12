// src/app/(frontend)/about/OpenSource.tsx
'use client'

import { Button } from '@thirdbracket/bracketui'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    name: 'BracketUI',
    description: 'A modern React component library built with TailwindCSS',
    stars: 120,
    url: 'https://github.com/thirdbracket/bracketui',
  },
  {
    name: 'Next.js Starter',
    description: 'A production-ready Next.js starter template with TypeScript and TailwindCSS',
    stars: 85,
    url: 'https://github.com/thirdbracket/nextjs-starter',
  },
  {
    name: 'SEO Toolkit',
    description: 'A collection of tools for improving website SEO performance',
    stars: 64,
    url: 'https://github.com/thirdbracket/seo-toolkit',
  },
]

export default function OpenSource() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="opensource">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
          Open Source
        </h2>
        <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
          We believe in giving back to the community through open source contributions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-primary-200 dark:border-primary-800 rounded-lg p-6 bg-white dark:bg-black"
          >
            <h3 className="text-xl bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold mb-3">
              {project.name}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-primary-500 dark:text-primary-400">
                <span className="mr-1">★</span>
                <span>{project.stars}</span>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          as="a"
          href="https://github.com/thirdbracket"
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          theme={{
            background: 'bg-gradient-text dark:bg-gradient-text-dark',
            hoverBackground: '[@media(hover:hover)]:hover:opacity-85',
            focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
            text: 'text-primary-50 dark:text-primary-950',
          }}
        >
          <FaGithub className="mr-2" />
          View All Projects
        </Button>
      </div>
    </section>
  )
}
