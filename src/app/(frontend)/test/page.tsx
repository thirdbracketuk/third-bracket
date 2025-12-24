// src/app/(frontend)/about/page.tsx
import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

// Structured data now in layout.tsx

import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import { Settings } from '@/utilities/meta'

export const metadata: Metadata = {
  title: 'About Third Bracket Ltd Digital Agency in Manchester',
  description:
    'Learn about Third Bracket Ltd, our team, values, open source work and journey, with a clear look at how we build, collaborate and grow with clients.',
  openGraph: {
    title: 'Learn About Third Bracket Ltd Web Development Company',
    description:
      'Discover the story behind Third Bracket Ltd, our work culture, values, collaborations and open source mindset shaping how we build and grow digital projects.',
  },
}

export default function TestPage() {
  return (
    <section className="space-y-8">
      <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50 flex flex-col">
        {/* Main content */}
        <div className="flex-1  mx-auto w-full p-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">Light Theme Design System</h1>

          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            This section demonstrates the approved light theme for the project. Backgrounds, cards,
            borders, and CTA elements use the finalized color tokens.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl bg-white border border-gray-200 p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Primary Background</h2>
              <p className="text-gray-600 leading-relaxed">
                The root background uses a gradient from white to cyan-50, providing a clean,
                neutral canvas for all content.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Card Background</h2>
              <p className="text-gray-600 leading-relaxed">
                Cards use a white background with gray-200 borders to separate content without
                competing with the root background.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Accent & Focus</h2>
              <p className="text-gray-600 leading-relaxed">
                CTA elements use sky-500 → cyan-500 gradient backgrounds with white and sky-100
                text. Focus rings are sky-500 to ensure accessibility.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}

        <div className="px-12 pb-12">
          <div className="rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500   to-sky-500 text-center p-12">
            <h2 className="text-3xl font-semibold text-white mb-4">Completed Light Theme</h2>
            <p className="text-sky-100 mb-8 max-w-xl mx-auto text-xl">
              This CTA 8 demonstrates how accent backgrounds and text behave in the finalized light
              theme.
            </p>
            <button
              className="px-8 py-4 rounded-lg bg-white text-sky-600 font-medium
                       hover:bg-sky-50 focus:outline-none focus:ring-2
                       focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              CTA 8 Example
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-zinc-900 flex flex-col">
        {/* Main content */}
        <div className="flex-1  mx-auto w-full p-12">
          <h1 className="text-4xl font-semibold text-gray-50 mb-6">Dark Theme Design System</h1>

          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            This section demonstrates the finalized dark theme. Backgrounds, cards, borders, and CTA
            elements have been adapted for optimal contrast and readability.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl bg-gray-800 border border-gray-700 p-8">
              <h2 className="text-xl font-medium text-gray-50 mb-4">Primary Background</h2>
              <p className="text-gray-400 leading-relaxed">
                The root background uses a gradient from gray-950 to zinc-900, providing a dark
                canvas suitable for content and cards.
              </p>
            </div>

            <div className="rounded-xl bg-gray-800 border border-gray-700 p-8">
              <h2 className="text-xl font-medium text-gray-50 mb-4">Card Background</h2>
              <p className="text-gray-400 leading-relaxed">
                Cards use gray-800 with gray-700 borders to separate content without reducing
                contrast in dark mode.
              </p>
            </div>

            <div className="rounded-xl bg-gray-800 border border-gray-700 p-8">
              <h2 className="text-xl font-medium text-gray-50 mb-4">Accent & Focus</h2>
              <p className="text-gray-400 leading-relaxed">
                CTA elements use sky-400 → cyan-400 gradients with white and sky-100 text. Focus
                rings remain sky-400 for accessibility on dark backgrounds.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-12 pb-12">
          <div className="rounded-2xl bg-gradient-to-br from-sky-600 via-cyan-600   to-sky-600 p-12 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Completed Dark Theme</h2>
            <p className="text-sky-100 mb-8 max-w-xl mx-auto text-xl">
              This CTA demonstrates how accent backgrounds and text behave in the finalized dark
              theme.
            </p>
            <button
              className="px-8 py-4 rounded-lg bg-white text-sky-600 font-medium
                       hover:bg-sky-50 focus:outline-none focus:ring-2
                       focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              CTA 8 Example
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
