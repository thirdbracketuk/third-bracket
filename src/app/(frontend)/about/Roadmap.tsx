// src/app/(frontend)/about/Roadmap.tsx
'use client'

const roadmapItems = [
  {
    year: '2019',
    title: 'Foundation',
    description: 'Third Bracket was founded with a focus on modern web development.',
  },
  {
    year: '2020',
    title: 'Growth & Expansion',
    description: 'Expanded our team and client base, focusing on Next.js development.',
  },
  {
    year: '2021',
    title: 'Service Diversification',
    description: 'Added UI/UX design and digital marketing services to our offerings.',
  },
  {
    year: '2022',
    title: 'Component Library',
    description: 'Launched our own UI component library to streamline development.',
  },
  {
    year: '2023',
    title: 'International Clients',
    description:
      'Expanded our client base to include businesses from across Europe and North America.',
  },
  {
    year: '2024',
    title: 'Future Vision',
    description: 'Focusing on AI integration and advanced web applications.',
  },
]

export default function Roadmap() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="roadmap">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
          Our Journey
        </h2>
        <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
          The evolution of Third Bracket from inception to present day
        </p>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800"></div>

        <div className="space-y-12">
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-400 dark:bg-accent-600 rounded-full z-10"></div>

              <div
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2"></div>
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-black border border-primary-200 dark:border-primary-800 rounded-lg p-4">
                    <div className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 rounded-full text-sm font-medium mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-xl bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
