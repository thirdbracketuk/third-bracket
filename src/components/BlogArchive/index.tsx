'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CollectionArchive } from '@/components/CollectionArchive'
import type { CardPostData } from '@/components/Card'

const filters = [
  { label: 'All Articles', value: '' },
  { label: 'Web Development', value: 'web-development' },
  { label: 'UI/UX Design', value: 'ui-ux-design' },
  { label: 'Digital Marketing', value: 'digital-marketing' },
  { label: 'SEO & Growth', value: 'seo-growth' },
  { label: 'WordPress Tips', value: 'wordpress' },
  { label: 'Next.js Guides', value: 'nextjs' },
]

export const BlogArchive = ({ posts }: { posts: CardPostData[] }) => {
  const searchParams = useSearchParams()
  const [active, setActive] = useState(searchParams.get('category') || '')

  const activeFilter = filters.find((f) => f.value === active) || filters[0]

  const filtered = active
    ? posts.filter((p: any) => p.categories?.some((c: any) => c.slug === active))
    : posts

  return (
    <div className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      {/* Filter buttons */}
      <div className="container mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={
              active === f.value
                ? 'px-3 py-1.5 rounded-lg text-[12px] font-medium border border-transparent bg-accent-600 dark:bg-accent-500 text-white shadow-[0_2px_8px_rgba(188,58,91,0.3)]'
                : 'px-3 py-1.5 rounded-lg text-[12px] font-medium border border-secondary-100 dark:border-secondary-800 text-secondary-500 dark:text-secondary-400 hover:border-secondary-200 dark:hover:border-secondary-700 bg-transparent'
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Dynamic heading */}
      <div className="container mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
          {activeFilter.label}
        </h2>
        <p className="mt-1 text-sm text-secondary-400 dark:text-secondary-600">
          {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
        </p>
      </div>

      <CollectionArchive posts={filtered} relationTo="blog" />
    </div>
  )
}
