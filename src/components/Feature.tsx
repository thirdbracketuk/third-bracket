'use client'
import { Bracket, Card } from '@thirdbracket/bracketui'

const cards = [
  {
    name: 'speed',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Cloud First
        </span>
      ),
      cover: '/webspeed.svg',

      children:
        'We ignore shared hosting the same way your crush ignores you. We build every site on dedicated cloud resources instead of shared hosting.',
    },
  },

  {
    name: 'cost',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Infrastructure Engineering
        </span>
      ),
      cover: '/cost.svg',

      children:
        'Infrastructure is only as good as the engineering behind it. We engineer your infrastructure for both strength and flexibility.',
    },
  },

  {
    name: 'minimal',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Delivery & Distribution
        </span>
      ),
      cover: '/asthetic.svg',

      children:
        'Our content distribution and delivery includes a three‑layer setup to ensure your site loads almost instantly for every visitor.',
    },
  },
  {
    name: 'design',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Performance Optimization
        </span>
      ),

      children:
        'Performance goes beyond CMS. Our full‑stack acceleration strategy addresses every layer of your infrastructure and code.',
    },
  },
  {
    name: 'seo',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Modern Design
        </span>
      ),

      children:
        'Design influences trust. Our experienced design team knows what is trending now, that is why we have our own component library Bracket UI.',
    },
  },

  {
    name: 'devops',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          SEO Foundation
        </span>
      ),

      children:
        'All our website are shipped with optimized copy, meta tags, HTTPS, XML sitemaps and logical site architecture.',
    },
  },
  {
    name: 'bracketui',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Transparency & Security
        </span>
      ),
      cover: '/delivery.svg',

      children:
        'Having a small budget doesn’t mean you should be vendor locked. We ensure you own your site with full admin, domain, hosting and licence access',
    },
  },
  {
    name: 'whitelabel',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Launch Ready
        </span>
      ),

      children:
        'A website should work the moment it goes live. We don’t hand over half‑finished projects. Every site is shipped with features configured.',
    },
  },
]

export default function CardGrid() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          {/* Header */}
          <div className="mb-8 md:mb-10 lg:mb-12 grid gap-3 lg:gap-4 lg:grid-cols-2 lg:items-center lg:max-w-5xl lg:mx-auto">
            <h2 className=" text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold  tracking-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left sm:text-center lg:text-right">
              What Makes Third Bracket Ltd Different?
            </h2>
            <p className=" text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 text-left sm:text-center lg:text-left">
              Every decision, from design to development, is engineered for performance and cost.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4   [column-fill:_balance]">
              {cards.map(({ name, props }, index) => (
                <div
                  key={index}
                  className="mb-6 break-inside-avoid"
                  data-card-name={name} // You can use this for debugging or testing
                >
                  <Card
                    size="lg"
                    theme={{
                      background: 'bg-white dark:bg-black',
                      border:
                        'border-opacity-30  border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]   ',

                      //shadow-secondary-100 dark:shadow-secondary-900/50
                      hover:
                        '[@media(hover:hover)]:hover:border-opacity-50    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100 ',

                      text: 'text-primary-400 dark:text-primary-600    leading-[1.45] font-normal',
                    }}
                    className="!delay-50   motion-reduce:!transition-none motion-reduce:hover:!transform-none "
                    {...props}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  )
}
