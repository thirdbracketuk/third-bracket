'use client'
import { Bracket, Card } from '@thirdbracket/bracketui'

const cards = [
  {
    name: 'speed',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Speed
        </span>
      ),
      cover: '/webspeed.svg',

      children:
        'Every site we deliver loads within a second, wheather it is built on WordPress or Next.js, no exceptions.',
    },
  },

  {
    name: 'cost',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Cost Engineering
        </span>
      ),
      cover: '/cost.svg',

      children:
        'We engineer infrastructure from the root, using edge networks, serverless functions and smart caching to cut resource use.',
    },
  },

  {
    name: 'minimal',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Minimal Aesthetics
        </span>
      ),
      cover: '/asthetic.svg',

      children:
        'Our design philosophy emphasizes whitespace, clarity, and strong visual hierarchy that enhances brand perception.',
    },
  },
  {
    name: 'design',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Code First
        </span>
      ),

      children:
        'We deliver well-organized, fully documentated code so any team can pick up right where we left off.',
    },
  },
  {
    name: 'seo',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          SEO Optimization
        </span>
      ),

      children:
        'Every website we build is SEO-ready with structured data, speed optimization, and best practices baked in.',
    },
  },

  {
    name: 'devops',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          DevOps Engineered
        </span>
      ),

      children:
        'We streamline development with CI/CD pipelines, infrastructure as code, and collaborative workflows, ensuring seamless scalability.',
    },
  },
  {
    name: 'bracketui',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Faster Delivery
        </span>
      ),
      cover: '/delivery.svg',

      children:
        'With our in-house UI components, elementor templates and a refined development stack, we ship projects by the time others pick a name.',
    },
  },
  {
    name: 'whitelabel',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          White-Label Friendly
        </span>
      ),

      children:
        'We’re agency-ready. Our systems and components are reusable, documented, and easily integrated into your workflows.',
    },
  },
]

export default function CardGrid() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]  ">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          {/* Header */}

          <div className=" mb-8 md:mb-10 lg:mb-16 grid gap-3 lg:gap-4  lg:grid-cols-2 lg:items-center lg:max-w-5xl lg:mx-auto ">
            <h2 className="  text-[1.75rem]/[1.4] lg:text-3xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left sm:text-center lg:text-right tracking-tight">
              {/* Looking for Fast & Affordable Web Development in the UK? */}
              What Makes Third Bracket Ltd Different?
            </h2>
            <p className="text-base/7  lg:text-[1.15rem]/8   text-primary-500 text-left sm:text-center lg:text-left">
              Every decition, from design to development, is engineered for performance and cost.
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

                      text: 'text-primary-500   leading-[1.45] font-normal',
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
